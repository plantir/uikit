<script lang="ts">
	import './SubMenu.css';
	import El from '../../utils/El.svelte';
	import type { SubMenu } from './SubMenu.type.js';
	import type { GlobalColor, GlobalSize } from '../../utils/El.types.js';
	import type { Snippet } from 'svelte';

	let {
		collapse = false,
		title = '',
		children,
		...others
	}: SubMenu & {
		children?: Snippet;
	} = $props();

	let componentName = 'sub-menu';
	let componentClass = $derived({});
</script>

<!-- <span transition:fade> -->
{#if collapse}
	<details open {...others}>
		{#if title}
			<summary>{title}</summary>
		{/if}
		<ul>
			{#if children}
				{@render children()}
			{/if}
		</ul>
	</details>
{:else}
	{#if title}
		<a>{title}</a>
	{/if}
	<El {componentName} {componentClass} {...others} tag="ul">
		{#if children}
			{@render children()}
		{/if}
	</El>
{/if}
<!-- </span> -->
