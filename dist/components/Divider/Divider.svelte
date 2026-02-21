<script lang="ts">
	import type { Divider, DividerColor, DividerSize } from './Divider.type.js';
	import './Divider.css';
	import El from '../../utils/El.svelte';
	import type { Snippet } from 'svelte';

	let {
		size = 'md',
		color,
		start = false,
		end = false,
		horizontal = false,
		children,
		...others
	}: Divider & {
		children?: Snippet;
	} = $props();

	let componentName = 'divider';
	let componentClass = $derived({
		size,
		color,
		start,
		end,
		horizontal
	});
</script>

<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
