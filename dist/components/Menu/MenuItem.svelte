<script lang="ts">
	import './MenuItem.css';
	import El from '../../utils/El.svelte';
	import type { MenuItem } from './MenuItem.type.js';
	import type { Snippet } from 'svelte';

	let {
		active = false,
		disabled = false,
		children,
		...others
	}: MenuItem & {
		children?: Snippet;
	} = $props();

	let componentName = 'menu-item';
	let componentClass = $derived({
		active,
		disabled
	});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others} tag="li">
	{#if children}
		{@render children()}
	{/if}
</El>
<!-- </span> -->
