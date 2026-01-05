<script lang="ts">
	import './Breadcrumb.css';
	import El from '$lib/utils/El.svelte';
	import type { Breadcrumbs } from './Breadcrumbs.type.js';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
	import type { Snippet } from 'svelte';
	let {
		children,
		...others
	}: {
		children?: Snippet;
	} = $props();
	let componentName = 'breadcrumb';
	let componentClass = $derived({});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others} tag="li">
	{#if children}
		{@render children()}
	{/if}
</El>
<!-- </span> -->
