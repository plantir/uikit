<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { CardBody } from './CardBody.type.ts';
	import './CardBody.css';
	import type { Snippet } from 'svelte';
	let {
		children,
		...others
	}: {
		children?: Snippet;
	} = $props();
	let componentName = 'card-body';
	let componentClass = $derived({});
</script>

<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
