<script lang="ts">
	import { onMount } from 'svelte';
	import {
		computePosition,
		shift,
		flip,
		offset as offsetMiddleware,
		autoUpdate
	} from '@floating-ui/dom';
	import El from '$lib/utils/El.svelte';
	import type { Tooltip, TooltipPlacement } from './Tooltip.type.js';
	import type { GlobalColor } from '$lib/utils/El.types.js';

	type $$Props = Tooltip;

	export let placement: TooltipPlacement = 'top';
	export let title: string = '';
	export let color: GlobalColor = undefined;
	let componentName = 'tooltip';

	$: componentClass = {
		placement,
		color
	};
</script>

<El {componentClass} {componentName} {...$$restProps} data-tip={$$slots.title ? '' : title}>
	{#if $$slots.title}
		<div class="tooltip-content">
			<slot name="title" />
		</div>
	{/if}
	<slot />
</El>
