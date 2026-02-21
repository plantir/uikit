<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import { getCheckboxGroupContext } from '../CheckboxGroup/CheckboxGroup.svelte';
	import type { Checkbox, CheckboxColor, CheckboxSize } from './Checkbox.type.js';
	import './Checkbox.css';
	let {
		checked = $bindable(false),
		label,
		value,
		disabled = false,
		indeterminate = false,
		size,
		color,
		children,
		class: className,
		labelSnippet = defaultLabelSnippet,
		onchange,
		...others
	}: {
		checked?: boolean;
		label?: string;
		value?: string;
		disabled?: boolean;
		indeterminate?: boolean;
		size?: CheckboxSize;
		color?: CheckboxColor;
		children?: Snippet;
		class?: string;
		labelSnippet?: Snippet;
		onchange?: any;
	} = $props();
	let componentName = 'checkbox';

	let node: HTMLInputElement | undefined = $state();
	function makeIndeterminate() {
		if (node && indeterminate) {
			node.indeterminate = true;
		}
	}

	const ctx = getCheckboxGroupContext();
	const selected = ctx?.selected ?? writable();
	const disabledStore = ctx?.disabled;
	let disabledCombined = $derived(disabledStore ? disabled || $disabledStore : disabled);
	const onChange = (e: any) => {
		if (!ctx) return;
		if (e.target.checked) {
			$selected = [...$selected, e.currentTarget.value];
		} else {
			$selected = $selected.filter((value) => value !== e.currentTarget.value);
		}
		if (onchange) {
			onchange();
		}
	};

	onMount(() => {
		indeterminate && makeIndeterminate();

		if (ctx && value) {
			checked = $selected.includes(value);
		}
	});
	let componentClass = $derived({
		size,
		color,
		disabled: disabledCombined
	});
	let wrapperClass = $derived(
		ClassMerge({ name: `${componentName}-wrapper`, staticClassess: className })
	);
	let elClass = $derived(ClassMerge({ name: componentName, componentClass }));
</script>

{#snippet defaultLabelSnippet()}
	{label}
{/snippet}
<label class={wrapperClass}>
	<input
		bind:this={node}
		type="checkbox"
		disabled={disabledCombined}
		{value}
		class={elClass}
		bind:checked
		onchange={onChange}
		{...others}
	/>
	{@render labelSnippet()}
</label>
