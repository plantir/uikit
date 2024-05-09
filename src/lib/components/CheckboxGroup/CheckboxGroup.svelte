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
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { CheckboxGroup } from './CheboxGroup.type.js';
	let componentName = 'checkbox-group';
	type $$Props = CheckboxGroup;
	let dispatch = createEventDispatcher();
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
	});

	function onValueChange() {
		selected.set(value);
	}
	$: value, onValueChange();
	$: elClass = ClassMerge({
		name: componentName,
		componentClass: {
			join,
			inline,
			column
		},
		staticClassess: $$props.class
	});
</script>

<div class={elClass}>
	<slot />
</div>
