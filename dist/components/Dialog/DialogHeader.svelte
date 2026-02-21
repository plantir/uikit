<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { DialogHeader } from './DialogHeader.type.js';
	import './DialogHeader.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { Snippet } from 'svelte';

	let {
		title,
		children = defaultChildren,
		...others
	}: DialogHeader & {
		children?: Snippet;
	} = $props();

	let componentName = 'dialog-header';
	let titleClass = $derived(ClassMerge({ name: `${componentName}-title` }));
	let componentClass = $derived({});
</script>

{#snippet defaultChildren()}
	{#if title}
		<h3 class={titleClass}>{title}</h3>
	{/if}
{/snippet}

<El {componentName} {componentClass} {...others}>
	{@render children()}
</El>