<script lang="ts">
	import { onMount } from 'svelte';
	import {
		computePosition,
		shift,
		flip,
		offset as offsetMiddleware,
		autoUpdate,
		arrow
	} from '@floating-ui/dom';
	import El from '$lib/utils/El.svelte';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Dropdown, DropdownPlacement } from './Dropdown.type.js';
	import './Dropdown.scss';

	type $$Props = Dropdown;

	export let placement: DropdownPlacement = 'bottom';
	export let open: boolean = false;
	export let offset: number = 8;

	let componentName = 'dropdown';

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
			}).then(({ x, y }) => {
				(left = `${x}px`), (top = `${y}px`);
			});
		}
	}
	
	function show() {
		open = true;
		floating?.focus();
	}

	function hide() {
		open = false;
		floating?.blur();
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
		if (!toggler || !floating) return;

		toggler.addEventListener('click', toggle);
		document.addEventListener('click', onClickOutside);

		const cleanup = autoUpdate(toggler, floating, updatePosition);

		if(open) {
			show()
		}

		return () => {
			cleanup();
			toggler!.removeEventListener('click', toggle);
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
