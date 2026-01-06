<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Toast, Toastplacement } from './Toast.type.js';
	import './Toast.css';
	import type { Snippet } from 'svelte';

	let {
		placement = 'bottom-end',
		children,
		...others
	}: Toast & {
		children?: Snippet;
	} = $props();

	let componentName = 'toast';
	let componentClass = $derived({
		placement: placement
	});
</script>

<El {componentClass} {componentName} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
