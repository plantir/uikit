<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { Page } from './Page.type.ts';
	import './Page.css';
	import type { Snippet } from 'svelte';

	let {
		container = true,
		children,
		...others
	}: Page & {
		children?: Snippet;
	} = $props();

	let componentName = 'page';

	let componentClass = $derived({
		container
	});
</script>

<El {componentClass} {componentName} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>