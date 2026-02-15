<script lang="ts">
	import type { Chat, ChatColor } from './Chat.type.js';
	import './Chat.css';
	import El from '$lib/utils/El.svelte';
	import { fade } from 'svelte/transition';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Snippet } from 'svelte';
	let {
		start = false,
		end = false,
		color,
		children,
		header,
		image,
		footer,
		...othres
	}: {
		start?: boolean;
		end?: boolean;
		color?: ChatColor;
		children?: Snippet;
		header?: Snippet;
		image?: Snippet;
		footer?: Snippet;
	} = $props();
	let componentName = 'chat';
	let componentClass = $derived({
		start,
		end
	});
	let bubbleClass = $derived(
		ClassMerge({
			name: `${componentName}-bubble`,
			componentClass: {
				color
			}
		})
	);
	let footerClass = $derived(
		ClassMerge({
			name: `${componentName}-footer`
		})
	);
	let imageClass = $derived(
		ClassMerge({
			name: `${componentName}-image`
		})
	);
	let headerClass = $derived(
		ClassMerge({
			name: `${componentName}-header`
		})
	);
</script>

<El {componentName} {componentClass} {...othres}>
	<div class={headerClass}>
		{#if header}
			{@render header()}
		{/if}
	</div>
	<div class={imageClass}>
		{#if image}
			{@render image()}
		{/if}
	</div>
	<div class={bubbleClass}>
		{#if children}
			{@render children()}
		{/if}
	</div>

	<div class={footerClass}>
		{#if footer}
			{@render footer()}
		{/if}
	</div>
</El>
