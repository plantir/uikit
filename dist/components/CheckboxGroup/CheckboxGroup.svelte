<script context="module" lang="ts">
	import { setContext, getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	interface CheckboxCtxType {
		join?: boolean;
		disabled?: Writable<boolean>;
		selected: Writable<(string | number)[]>;
	}

	const ctx = {};
	export function getCheckboxGroupContext(): CheckboxCtxType | undefined {
		return getContext(ctx);
	}

	export function setCheckboxGroupContext(value: CheckboxCtxType) {
		return setContext(ctx, value);
	}
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { CheckboxGroup } from './CheboxGroup.type.js';
	import El from '../../utils/El.svelte';
	type $$Props = CheckboxGroup;
	let dispatch = createEventDispatcher();
	let componentName = 'checkbox-group';

	export let value: $$Props['value'] = undefined;
	export let inline: $$Props['inline'] = false;
	export let join: $$Props['inline'] = false;
	export let column: $$Props['column'] = false;
	export let disabled: boolean = false; // Added disabled prop

	let selected = writable(value);
	const disabledStore = writable(disabled); // Create a writable store for disabled

	setCheckboxGroupContext({
		selected,
		disabled: disabledStore, // Pass disabled store to context
	});

	// Subscribe ONCE to selected, update value and dispatch
	selected.subscribe((val) => {
		if (val && val !== value) {
			value = val;
			dispatch('change', value);
		}
	});

	function onValueChange() {
		selected.set(value ?? []);
	}
	$: value, onValueChange();

	$: componentClass = {
		inline,
		join,
		column,
		disabled
	};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
