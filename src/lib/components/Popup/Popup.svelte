<script lang="ts">
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
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Popup, PopupPlacement } from './Popup.type.js';

	type $$Props = Popup;

	export let placement: PopupPlacement = 'bottom';
	export let open: boolean = false;
	export let offset: number = 4;

	let componentName = 'popup';

	let top = '';
	let left = '';

	let arrowEl: HTMLElement;
	let floating: HTMLElement | undefined = undefined;
	let toggler: HTMLElement | undefined | null = undefined;

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
	
	function showPopup() {
		floating?.focus();
		open = true;
	}

	function hideTooltip() {
		open = false;
		floating?.blur();
	}

	function togglePopup(event: any) {
		event.stopPropagation();
		open ? hideTooltip() : showPopup();
	}

	function onClickOutside(event: any) {
		if (!floating?.contains(event.target)) {
			hideTooltip();
		}
	}
	onMount(() => {
		if (!toggler || !floating) return;

		toggler.addEventListener('click', togglePopup);
		document.addEventListener('click', onClickOutside);

		const cleanup = autoUpdate(toggler, floating, updatePosition);

		if(open) {
			showPopup()
		}

		return () => {
			cleanup();
			toggler!.removeEventListener('click', togglePopup);
			document.removeEventListener('click', onClickOutside);
		};
	});

	$: componentClass = {};
	
	$: togglerClass = ClassMerge({ 
		name: `${componentName}-toggler` 
	});
	
	$: contentClass = ClassMerge({
		name: `${componentName}-content`,
		componentClass: {
			hidden: !open
		}
	});
</script>

<El {componentClass} {componentName} {...$$restProps}>
	<div bind:this={toggler} class={togglerClass}>
		<slot name="toggler" />
	</div>
	<!-- svelte-ignore a11y-no-noninteropen-tabindex -->
	<div
		bind:this={floating}
		class={contentClass}
		style="top: {top}; left: {left}; {$$props.style}"
		tabindex="0"
	>
		<slot />
	</div>
</El>
