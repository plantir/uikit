<script lang="ts">
	import './Dock.css';
	import El from '$lib/utils/El.svelte';
	import type { Dock } from './Dock.type.js';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
	import type { Snippet } from 'svelte';

	let {
		size = 'md',
		color,
		children,
		...others
	}: Dock & {
		children?: Snippet;
	} = $props();

	let componentName = 'dock';
	let componentClass = $derived({
		size,
		color
	});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
<!-- </span> -->
