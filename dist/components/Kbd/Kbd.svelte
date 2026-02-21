<script lang="ts">
	import './Kbd.css';
	import El from '../../utils/El.svelte';
	import type { Kbd, KbdSize } from './Kbd.type.js';
	import type { Snippet } from 'svelte';

	let {
		size = 'md',
		children,
		...others
	}: Kbd & {
		children?: Snippet;
	} = $props();

	let componentName = 'kbd';
	let componentClass = $derived({
		size: size
	});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others} tag="kbd">
	{#if children}
		{@render children()}
	{/if}
</El>
<!-- </span> -->
