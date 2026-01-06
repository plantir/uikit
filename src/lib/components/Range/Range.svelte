<script lang="ts">
	import type { Range, RangeColor, RangeSize } from './Range.type.js';
	import './Range.css';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Snippet } from 'svelte';

	let {
		label,
		value = $bindable(),
		disabled = false,
		readonly = false,
		size,
		color,
		min = 0,
		max = 100,
		step,
		class: className,
		labelSnippet,
		stepsSnippet,
		children,
		...others
	}: Range & {
		labelSnippet?: Snippet;
		stepsSnippet?: Snippet;
		children?: Snippet;
	} = $props();

	let componentName = 'range';
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

	function onChange(e: Event) {
		const target = e.currentTarget as HTMLInputElement;
		value = target.value;
	}
</script>

<label class={wrapperClass}>
	{#if labelSnippet}
		{@render labelSnippet()}
	{:else if label}
		{label}
	{/if}
	<input
		type="range"
		{...others}
		{readonly}
		{disabled}
		bind:value
		class={elClass}
		onchange={onChange}
		{min}
		{max}
		{step}
	/>
	{#if step}
		{#if stepsSnippet}
			{@render stepsSnippet()}
		{:else}
			<div class="w-full flex justify-between text-xs px-2">
				{#each { length: Math.ceil((+max - +min) / +step) + 1 } as i, _}
					<span>|</span>
				{/each}
			</div>
		{/if}
	{/if}
	{#if children}
		{@render children()}
	{/if}
</label>
