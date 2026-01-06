<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { DialogFooter } from './DialogFooter.type.js';
	import './DialogFooter.css';
	import type { Snippet } from 'svelte';

	let {
		title,
		children,
		...others
	}: DialogFooter & {
		children?: Snippet;
	} = $props();

	let componentName = 'dialog-footer';
	let componentClass = $derived({});
</script>

<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
