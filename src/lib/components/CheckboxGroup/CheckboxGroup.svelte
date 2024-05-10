<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	export interface CheckboxCtxType {
		join: boolean;
		selected: Writable<(string | number)[]>;
	}
</script>

<script lang="ts">
	import './CheckboxGroup.scss';
	import { setContext, createEventDispatcher } from 'svelte';
	import type { CheckboxGroup } from './CheboxGroup.type.js';
	import El from '$lib/utils/El.svelte';
	type $$Props = CheckboxGroup;
	let dispatch = createEventDispatcher();
	let componentName = 'checkbox-group';

	export let value: any[] = undefined;
	export let inline: boolean = false;
	export let column: boolean = false;
	export let join: boolean = false;
	
	if (!inline && !column) inline = true;
	
	const ctx: CheckboxCtxType = {
		join,
		selected: writable(value)
	};
	let selected = ctx.selected;
	setContext<CheckboxCtxType>('ctx', ctx);

	selected.subscribe((val) => {
		value = val;
		dispatch('change', value)
	});

	function onValueChange() {
		selected.set(value);
	}
	$: value, onValueChange();

	$: componentClass = {
		join,
		inline,
		column
	}
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
