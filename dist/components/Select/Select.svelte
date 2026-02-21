<script lang="ts">
	import type { Select, SelectColor, SelectSize } from './Select.type.ts';
	import './Select.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { Snippet } from 'svelte';

	let {
		label,
		items = [],
		disabled = false,
		bordered = true,
		multiple = false,
		size,
		color,
		placeholder,
		state,
		hint,
		value = $bindable(multiple ? [] : ''),
		class: className,
		labelSnippet,
		...others
	}: Select & {
		multiple?: boolean;
		labelSnippet?: Snippet;
	} = $props();

	let componentName = 'select';

	let convertedItems = $derived(
		items.map((item) => {
			if (typeof item === 'string') {
				return {
					title: item,
					value: item
				};
			} else {
				return item;
			}
		})
	);
	let wrapperClass = $derived(
		ClassMerge({ name: `${componentName}-wrapper`, staticClassess: className })
	);
	let labelClass = $derived(ClassMerge({ name: `${componentName}-label` }));
	let componentClass = $derived({
		xs: size === 'xs',
		sm: size === 'sm',
		md: size === 'md',
		lg: size === 'lg',
		xl: size === 'xl',
		disabled,
		bordered,
		primary: color === 'primary',
		secondary: color === 'secondary',
		accent: color === 'accent',
		success: color === 'success',
		info: color === 'info',
		error: color === 'error',
		warning: color === 'warning',
		neutral: color === 'neutral',
		multiple,
		'state-valid': state === 'valid',
		'state-invalid': state === 'invalid'
	});
	let elClass = $derived(
		ClassMerge({
			name: componentName,
			componentClass,
			staticClassess: className
		})
	);
	let hintClass = $derived(
		ClassMerge({
			name: `${componentName}-hint`,
			componentClass: {
				'state-valid': state === 'valid',
				'state-invalid': state === 'invalid'
			}
		})
	);
</script>

<label class={wrapperClass}>
	{#if labelSnippet}
		{@render labelSnippet()}
	{:else if label}
		<span class={labelClass}>
			{label}
		</span>
	{/if}
	{#if multiple}
		<select {...others} {disabled} multiple bind:value class={elClass}>
			{#if placeholder}
				<option disabled selected value="">{placeholder}</option>
			{/if}
			{#each convertedItems as { value: key, title }}
				<option value={key} selected={Array.isArray(value) && value.includes(key)}>
					{title}
				</option>
			{/each}
		</select>
	{:else}
		<select {...others} {disabled} bind:value class={elClass}>
			{#if placeholder}
				<option disabled selected value="">{placeholder}</option>
			{/if}
			{#each convertedItems as { value: key, title }}
				<option value={key} selected={value === key}>{title}</option>
			{/each}
		</select>
	{/if}
	{#if hint}
		<span class={hintClass}>{hint}</span>
	{/if}
</label>
