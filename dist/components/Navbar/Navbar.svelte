<script lang="ts">
	import './Navbar.css';
	import El from '../../utils/El.svelte';
	import type { Navbar } from './Navbar.type.js';
	import type { GlobalColor, GlobalSize } from '../../utils/El.types.js';
	import type { Snippet } from 'svelte';

	let {
		custom = false,
		color,
		children,
		start,
		center,
		end,
		...others
	}: Navbar & {
		children?: Snippet;
		start?: Snippet;
		center?: Snippet;
		end?: Snippet;
	} = $props();

	let componentName = 'navbar';
	let componentClass = $derived({
		color: color
	});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others} tag="nav">
	{#if custom}
		{#if children}
			{@render children()}
		{/if}
	{:else}
		<div class="ui-navbar-start">
			{#if start}
				{@render start()}
			{/if}
		</div>
		<div class="ui-navbar-center">
			{#if center}
				{@render center()}
			{/if}
		</div>
		<div class="ui-navbar-end">
			{#if end}
				{@render end()}
			{/if}
		</div>
	{/if}
</El>
<!-- </span> -->
