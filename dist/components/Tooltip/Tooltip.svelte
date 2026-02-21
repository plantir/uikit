<script lang="ts">
	import { onMount } from 'svelte';
	import {
		computePosition,
		shift,
		flip,
		offset as offsetMiddleware,
		autoUpdate
	} from '@floating-ui/dom';
	import El from '../../utils/El.svelte';
	import type { Tooltip, TooltipPlacement } from './Tooltip.type.js';
	import './Tooltip.css';
	import type { GlobalColor } from '../../utils/El.types.js';
	import type { Snippet } from 'svelte';

	let {
		placement = 'top',
		title = '',
		color,
		titleSnippet,
		children,
		...others
	}: Tooltip & {
		titleSnippet?: Snippet;
		children?: Snippet;
	} = $props();

	let componentName = 'tooltip';

	let componentClass = $derived({
		placement,
		color
	});

	let dataTip = $derived(titleSnippet ? '' : title);
</script>

<El {componentClass} {componentName} {...others} data-tip={dataTip}>
	{#if titleSnippet}
		<div class="tooltip-content">
			{@render titleSnippet()}
		</div>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</El>
