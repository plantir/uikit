<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { CardActions } from './CardActions.type.ts';
	import './CardActions.css';
	import type { Snippet } from 'svelte';
	let {
		children,
		...others
	}: {
		children?: Snippet;
	} = $props();
	let componentName = 'card-actions';
	let componentClass = $derived({});
</script>

<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
