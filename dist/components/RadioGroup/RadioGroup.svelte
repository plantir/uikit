<script context="module" lang="ts">
	import { setContext, getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	export interface RadioCtxType {
		join: boolean;
		selected: Writable<string | number | null>;
		disabled: Writable<boolean>;
	}

	const ctx = {};

	export function getRadioGroupContext(): RadioCtxType {
		return getContext(ctx);
	}

	export function setRadioGroupContext(value: RadioCtxType) {
		return setContext(ctx, value);
	}
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { RadioGroup } from './RadioGroup.type.js';
	import './RadioGroup.css';

	type $$Props = RadioGroup;

	let componentName = 'radio-group';
	let dispatch = createEventDispatcher();

	export let value: any = undefined;
	export let inline: boolean = false;
	export let column: boolean = false;
	export let disabled: boolean = false;
	export let join: boolean = false;
	if (!inline && !column) inline = true;

	const selected = writable(null);

	const disabledStore = writable(disabled)
	setRadioGroupContext({
		join,
		selected,
		disabled: disabledStore
	});
	selected.subscribe((val) => {
		if (val && val != value) {
			value = val;
			dispatch('change', value);
		}
	});
	function onValueChange() {
		selected.set(value);
	}
	$: value, onValueChange();
	$: disabled, disabledStore.set(disabled);

	$: elClass = ClassMerge({
		name: componentName,
		componentClass: {
			join,
			inline,
			column,
			disabled
		},
		staticClassess: $$props.class
	});
</script>

<div class={elClass}>
	<slot />
</div>