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
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { RadioGroup } from './RadioGroup.type.js';
	import './RadioGroup.css';
	import type { Snippet } from 'svelte';

	let {
		value = $bindable(undefined),
		inline = false,
		column = false,
		disabled = false,
		join = false,
		class: className,
		children,
		...others
	}: RadioGroup & {
		children?: Snippet;
	} = $props();

	let componentName = 'radio-group';

	if (!inline && !column) inline = true;

	const selected = writable(null);

	const disabledStore = writable(disabled);
	setRadioGroupContext({
		join,
		selected,
		disabled: disabledStore
	});

	selected.subscribe((val) => {
		if (val && val !== value) {
			value = val;
		}
	});

	function onValueChange() {
		selected.set(value);
	}

	$effect(() => {
		onValueChange();
	});

	$effect(() => {
		disabledStore.set(disabled);
	});

	let elClass = $derived(
		ClassMerge({
			name: componentName,
			componentClass: {
				join,
				inline,
				column,
				disabled
			},
			staticClassess: className
		})
	);
</script>

<div class={elClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</div>