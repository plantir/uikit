<script lang="ts">
	import './RadialProgress.css';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { RadialProgress, ProgressColor } from './RadialProgress.type.js';
	import type { Snippet } from 'svelte';

	let {
		value,
		color,
		size = '5rem',
		tick = 'calc(var(--daisy-size) / 10);',
		children,
		...others
	}: RadialProgress & {
		children?: Snippet;
	} = $props();

	let componentName = 'radial-progress';
	let componentClass = $derived({
		primary: color === 'primary',
		secondary: color === 'secondary',
		accent: color === 'accent',
		success: color === 'success',
		info: color === 'info',
		error: color === 'error',
		warning: color === 'warning',
		neutral: color === 'neutral'
	});
	let elClass = $derived(ClassMerge({ name: componentName, componentClass }));
</script>

<div
	class={elClass}
	style="--daisy-value:{value};--daisy-size:{size};--daisy-thickness:{tick}"
	role="progressbar"
	{...others}
>
	{#if children}
		{@render children()}
	{/if}
</div>
