<script lang="ts">
	import type { Switch, SwitchColor, SwitchSize } from './Switch.type.js';
	import './Switch.css';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Snippet } from 'svelte';

	let {
		label,
		value = $bindable(false),
		disabled = false,
		size,
		color,
		class: className,
		labelSnippet,
		...others
	}: Switch & {
		labelSnippet?: Snippet;
	} = $props();

	let componentName = 'switch';
	let componentClass = $derived({
		xs: size === 'xs',
		sm: size === 'sm',
		md: size === 'md',
		lg: size === 'lg',
		xl: size === 'xl',
		disabled: disabled,
		primary: color === 'primary',
		secondary: color === 'secondary',
		accent: color === 'accent',
		success: color === 'success',
		info: color === 'info',
		error: color === 'error',
		warning: color === 'warning',
		neutral: color === 'neutral'
	});
	let wrapperClass = $derived(
		ClassMerge({ name: `${componentName}-wrapper`, staticClassess: className })
	);
	let elClass = $derived(ClassMerge({ name: componentName, componentClass }));
</script>

<label class={wrapperClass}>
	<input
		type="checkbox"
		{disabled}
		class={elClass}
		bind:checked={value}
		{...others}
	/>
	{#if labelSnippet}
		{@render labelSnippet()}
	{:else if label}
		{label}
	{/if}
</label>
