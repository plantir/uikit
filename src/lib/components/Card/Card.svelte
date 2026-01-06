<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Card } from './Card.type.ts';
	import './Card.css';
	import type { Snippet } from 'svelte';
	let {
		color,
		size,
		border,
		dashed,
		fullImage,
		side,
		children,
		...others
	}: {
		color?: Card['color'];
		size?: Card['size'];
		border?: Card['border'];
		dashed?: Card['dashed'];
		fullImage?: Card['fullImage'];
		side?: Card['side'];
		children?: Snippet;
	} = $props();
	let componentName = 'card';
	let componentClass = $derived({
		size,
		border,
		dashed,
		'full-image': fullImage,
		side,
		color
	});
</script>

<El {componentName} {componentClass} {...others}>
	{#if children}
		{@render children()}
	{/if}
</El>
