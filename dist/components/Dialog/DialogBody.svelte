<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { DialogBody } from './DialogBody.type.js';
	import './DialogBody.css';
	import type { Snippet } from 'svelte';

	let {
		children,
		...others
	}: DialogBody & {
		children?: Snippet;
	} = $props();

	let componentName = 'dialog-body';
	let componentClass = $derived({});
</script>

<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>