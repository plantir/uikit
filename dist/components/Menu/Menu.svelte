<script lang="ts">
	import './Menu.css';
	import El from '../../utils/El.svelte';
	import type { Menu } from './Menu.type.js';
	import type { GlobalColor, GlobalSize } from '../../utils/El.types.js';
	import type { Snippet } from 'svelte';

	let {
		size,
		horzintal = false,
		title = '',
		children,
		...others
	}: Menu & {
		children?: Snippet;
	} = $props();

	let componentName = 'menu';
	let componentClass = $derived({
		size: size,
		horzintal
	});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others} tag="ul">
	{#if title}
		<li class="menu-title">{title}</li>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</El>
<!-- </span> -->
