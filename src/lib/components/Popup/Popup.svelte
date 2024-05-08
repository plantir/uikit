<script lang="ts">
	export let activator = '';
	export let placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
	import {
		computePosition,
		shift,
		flip,
		offset as offsetMiddleware,
		autoUpdate,
		arrow
	} from '@floating-ui/dom';
	import { onMount } from 'svelte';
	import './Pupup.scss';
	import El from '$lib/utils/El.svelte';
	import Card from '../Card/Card.svelte';

	export let active = false;
	export let offset = 8;

	let componentName = 'popup';
	$: componentClass = {};

	let top = '';
	let left = '';
	let arrowEl: Element;
	let floating: Element | undefined = undefined;
	let toggler: Element | undefined | null = undefined;

	function updatePosition() {
		if (floating && toggler) {
			computePosition(toggler, floating, {
				placement: placement,
				middleware: [
					offsetMiddleware(offset),
					flip(),
					shift({ padding: offset }),
					arrow({ element: arrowEl })
				]
			}).then(({ x, y, placement, middlewareData }) => {
				(left = `${x}px`), (top = `${y}px`);
			});
		}
	}
	function showTooltip() {
		floating?.focus();
		active = true;
	}
	function hideTooltip() {
		active = false;
		floating?.blur();
	}
	function toggleTooltip(event: MouseEvent) {
		event.stopPropagation();
		active ? hideTooltip() : showTooltip();
	}

	function onClickOutside(event: MouseEvent) {
		if (!floating?.contains(event.target)) {
			hideTooltip();
		}
	}
	onMount(() => {
		toggler = floating?.previousElementSibling;

		if (!toggler || !floating) return; //if one of these do not exist then we can do nothing

		toggler.addEventListener('click', toggleTooltip);
		document?.addEventListener('click', onClickOutside);

		const cleanup = autoUpdate(toggler, floating as HTMLElement, updatePosition);

		return () => {
			cleanup();
			toggler?.removeEventListener('click', toggleTooltip);
			document?.removeEventListener('click', onClickOutside);
		};
	});
</script>

<El {componentClass} {componentName}>
	<slot name="toggler" />
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<Card
		bind:node={floating}
		class="popup-bubble {$$props.class}  {!active && 'hidden'}"
		style="top: {top}; left: {left};  {$$props.style}"
		tabindex="0"
		{...$$restProps}
	>
		<slot />
	</Card>
</El>
