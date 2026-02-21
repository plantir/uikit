<script lang="ts">
	import './Stats.css';
	import El from '../../utils/El.svelte';
	import type { Stats } from './Stats.type.js';
	import type { Snippet } from 'svelte';

	let {
		vertical = false,
		children,
		...others
	}: Stats & {
		children?: Snippet;
	} = $props();

	let componentName = 'stats';
	let componentClass = $derived({
		vertical: vertical === true
	});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
<!-- </span> -->
