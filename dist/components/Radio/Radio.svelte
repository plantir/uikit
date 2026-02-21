<script lang="ts">
	import { writable } from 'svelte/store';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import { getRadioGroupContext } from '../RadioGroup/RadioGroup.svelte';
	import type { Radio, RadioColor, RadioSize } from './Radio.type.js';
	import './Radio.css';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	let {
		label,
		value = '',
		disabled = false,
		size,
		color,
		button = false,
		class: className,
		labelSnippet,
		...others
	}: Radio & {
		labelSnippet?: Snippet;
	} = $props();

	let componentName = 'radio';

	const ctx = getRadioGroupContext();
	const disabledStore = ctx?.disabled;
	const selected = ctx?.selected ?? writable();

	let disabledState = $state(disabled);

	function onChange(e: Event) {
		const target = e.currentTarget as HTMLInputElement;
		selected.set(target.value);
	}

	onMount(() => {
		if (disabledStore && $disabledStore) {
			disabledState = true;
		}
	});

	let disabledCombined = $derived(
		disabledStore ? disabledState || $disabledStore : disabledState
	);
	let componentClass = $derived({
		xs: size === 'xs',
		sm: size === 'sm',
		md: size === 'md',
		lg: size === 'lg',
		xl: size === 'xl',
		disabled: disabledCombined,
		primary: color === 'primary',
		secondary: color === 'secondary',
		accent: color === 'accent',
		success: color === 'success',
		info: color === 'info',
		error: color === 'error',
		warning: color === 'warning',
		neutral: color === 'neutral',
		button,
		join: ctx?.join
	});
	let wrapperClass = $derived(
		ClassMerge({ name: `${componentName}-wrapper`, staticClassess: className })
	);
	let elClass = $derived(ClassMerge({ name: componentName, componentClass }));
</script>

{#if button}
	<input
		aria-label={label}
		type="radio"
		checked={$selected === value}
		disabled={disabledCombined}
		{value}
		class={elClass}
		onchange={onChange}
		{...others}
	/>
{:else}
	<label class={wrapperClass}>
		<input
			type="radio"
			checked={$selected === value}
			disabled={disabledCombined}
			{value}
			class={elClass}
			onchange={onChange}
			{...others}
		/>
		{#if labelSnippet}
			{@render labelSnippet()}
		{:else if label}
			{label}
		{/if}
	</label>
{/if}
