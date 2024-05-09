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
	import './Tooltip.scss';

	type $$Props = Tooltip;

	export let placement: TooltipPlacement = 'bottom';
	export let open: boolean = false;
	export let offset: number = 8;

	let componentName = 'tooltip';

	let top = '';
	let left = '';

	let timer: any;

	let tooltipEl: HTMLElement;
	let floating: HTMLElement | undefined = undefined;
	
	function updatePosition() {
		if (floating && tooltipEl) {
			computePosition(tooltipEl, floating, {
				placement: placement,
				strategy: 'absolute',
				middleware: [
					offsetMiddleware(offset),
					flip(),
					shift({ padding: offset }),
				]
			}).then(({ x, y }) => {
				(left = `${x}px`), (top = `${y}px`);
			});
		}
	}
	
	function show() {
		if(timer) {
			clearTimeout(timer)
		}
		open = true;
	}

	function hide() {
		timer = setTimeout(() => {
			open = false;
		}, 100)
	}

	function toggle(event: any) {
		event.stopPropagation();
		open ? hide() : show();
	}

	function onClickOutside(event: any) {
		if (!floating?.contains(event.target)) {
			hide();
		}
	}
	onMount(() => {
		tooltipEl = floating?.previousElementSibling;

		if (!tooltipEl || !floating) return;

		tooltipEl.addEventListener('mouseenter', show);
		tooltipEl.addEventListener('mouseleave', hide);

		floating.addEventListener('mouseenter', show);
		floating.addEventListener('mouseleave', hide);

		const cleanup = autoUpdate(tooltipEl, floating, updatePosition);

		if(open) {
			show()
		}

		return () => {
			cleanup();
			tooltipEl.removeEventListener('mouseenter', show);
			tooltipEl.removeEventListener('mouseleave', hide);

			floating.removeEventListener('mouseenter', show);
			floating.removeEventListener('mouseleave', hide);

		};
	});

	$: componentClass = {
		hidden: !open
	};
</script>

<El 
	bind:node={floating} 
	{componentClass} 
	{componentName} 
	{...$$restProps} 
	style="top: {top}; left: {left}; {$$props.style}" 
	tabindex="0"
>
	<slot />
</El>
