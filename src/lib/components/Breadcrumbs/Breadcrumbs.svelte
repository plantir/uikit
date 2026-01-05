<script lang="ts">
	import './Breadcrumbs.css';
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
	let componentName = 'breadcrumbs';
	let componentClass = $derived({});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others}>
	<ul>
		{#if children}
			{@render children()}
		{/if}
	</ul>
</El>
<!-- </span> -->
