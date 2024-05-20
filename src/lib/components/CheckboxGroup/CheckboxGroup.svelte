<script context="module" lang="ts">
	import {setContext, getContext} from 'svelte'
	import { writable, type Writable } from 'svelte/store';

	interface CheckboxCtxType {
		join?: boolean;
		selected: Writable<(string | number)[]>;
	}

	const ctx = {}
	export function getCheckboxGroupContext(): CheckboxCtxType | undefined {
		return getContext(ctx)
	}

	export function setCheckboxGroupContext(value: CheckboxCtxType) {
		return setContext(ctx, value)
	}
</script>

<script lang="ts">
	import './CheckboxGroup.scss';
	import { createEventDispatcher } from 'svelte';
	import type { CheckboxGroup } from './CheboxGroup.type.js';
	import El from '$lib/utils/El.svelte';
	type $$Props = CheckboxGroup;
	let dispatch = createEventDispatcher();
	let componentName = 'checkbox-group';

	export let value: $$Props['value'] = undefined;
	export let inline: $$Props['inline'] = false;
	export let join: $$Props['inline'] = false;
	export let column: $$Props['column'] = false;
	
	
	let selected = writable(value);

	setCheckboxGroupContext({
		selected
	});


	selected.subscribe((val) => {
		value = val;
		dispatch('change', value)
	});

	function onValueChange() {
		selected.set(value ?? []);
	}
	$: value, onValueChange();

	$: componentClass = {
		inline,
		join,
		column
	}
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
