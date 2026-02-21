<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import {
		computePosition,
		shift,
		flip,
		offset as offsetMiddleware,
		autoUpdate,
		arrow
	} from '@floating-ui/dom';
	import El from '../../utils/El.svelte';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { Dropdown, DropdownPlacement } from './Dropdown.type.js';
	import './Dropdown.css';
	let {
		placement = 'bottom',
		open = false,
		offset = 8,
		children,
		togglerSnippet,
		style: styleClass,
		...others
	}: {
		placement?: DropdownPlacement;
		open?: boolean;
		offset?: number;
		children?: Snippet;
		togglerSnippet?: Snippet;
		style?: string;
	} = $props();

	let componentName = 'dropdown';

	let top = $state('');
	let left = $state('');

	let arrowEl: HTMLElement | undefined = $state(undefined);
	let floating: HTMLElement | undefined = $state(undefined);
	let toggler: HTMLElement | undefined = $state(undefined);

	const updatePosition = () => {
		if (floating && toggler) {
			computePosition(toggler, floating, {
				placement: placement,
				middleware: [
					offsetMiddleware(offset),
					flip(),
					shift({ padding: offset }),
					arrow({ element: arrowEl! })
				]
			}).then(({ x, y }) => {
				(left = `${x}px`), (top = `${y}px`);
			});
		}
	};

	const show = () => {
		open = true;
	};

	const hide = () => {
		open = false;
	};

	const toggle = (event: any) => {
		open ? hide() : show();
	};

	const onClickOutside = (event: any) => {
		if (
			floating &&
			!floating.contains(event.target) &&
			toggler &&
			!toggler.contains(event.target)
		) {
			hide();
		}
	};
	onMount(() => {
		if (!toggler || !floating) return;

		toggler.addEventListener('click', toggle);
		document.addEventListener('click', onClickOutside);

		const cleanup = autoUpdate(toggler, floating, updatePosition);

		if (open) {
			show();
		}

		return () => {
			cleanup();
			toggler!.removeEventListener('click', toggle);
			document.removeEventListener('click', onClickOutside);
		};
	});
	let componentClass = $derived({});
	let togglerClass = $derived(
		ClassMerge({
			name: `${componentName}-toggler`
		})
	);
	let contentClass = $derived(
		ClassMerge({
			name: `${componentName}-content`,
			componentClass: {
				hidden: !open
			}
		})
	);
</script>

<El {componentClass} {componentName} {...others}>
	<div bind:this={toggler} class={togglerClass}>
		{#if togglerSnippet}
			{@render togglerSnippet()}
		{/if}
	</div>
	<!-- svelte-ignore a11y-no-noninteropen-tabindex -->
	<div
		bind:this={floating}
		class={contentClass}
		style="top: {top}; left: {left}; {styleClass}"
		tabindex="0"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</El>
