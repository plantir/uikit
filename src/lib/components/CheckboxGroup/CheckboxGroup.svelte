<script context="module" lang="ts">
	import { setContext, getContext, type Snippet } from 'svelte';
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
	import './CheckboxGroup.css';
	import El from '$lib/utils/El.svelte';
	let {
		value = $bindable(),
		inline = false,
		join = false,
		column = false,
		disabled = false,
		children,
		onChange,
		...others
	}: {
		value?: any;
		inline?: boolean;
		join?: boolean;
		column?: boolean;
		disabled?: boolean;
		children?: Snippet;
		onChange?: any;
	} = $props();
	let componentName = 'checkbox-group';

	let selected = writable(value);
	const disabledStore = writable(disabled); // Create a writable store for disabled

	setCheckboxGroupContext({
		selected,
		disabled: disabledStore // Pass disabled store to context
	});

	// Subscribe ONCE to selected, update value and dispatch
	selected.subscribe((val) => {
		if (val && val !== value) {
			value = val;
			if (onChange) {
				onChange(value);
			}
		}
	});
	$effect(() => {
		selected.set(value ?? []);
	});
	let componentClass = $derived({
		inline,
		join,
		column,
		disabled
	});
</script>

<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
