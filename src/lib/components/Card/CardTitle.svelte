<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { CardTitle } from './CardTitle.type.js';
	import './CardTitle.css';
	import type { Snippet } from 'svelte';
	let {
		children,
		...others
	}: {
		children?: Snippet;
	} = $props();
	let componentName = 'card-title';
	let componentClass = $derived({});
</script>

<El tag="h2" {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
