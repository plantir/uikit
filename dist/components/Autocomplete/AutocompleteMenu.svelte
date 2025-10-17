<script lang="ts">
	import {
		computePosition,
		offset as offsetMiddleware,
		shift as shiftMiddleware,
		flip as flipMiddleware
	} from '@floating-ui/dom';
	import type { AutocompleteMenu } from './Autocomplete.type';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import { onMount } from 'svelte';

	type $$Props = AutocompleteMenu;

	let {
		placement = 'bottom',
		trigger,
		popupOffset,
		autoClose = 'outside',
		componentName = 'autocomplete-menu',
		show = $bindable(),
		children,
		...restProps
	}: $$Props = $props();

	let popupEl: HTMLElement | undefined = $state(undefined);
	let targetEl: Element | undefined = $state(undefined);

	let timer: any = $state(undefined);

	let left: string = $state('');
	let top: string = $state('');

	function showPopup() {
		if (timer && trigger === 'hover') clearTimeout(timer);

		targetEl = popupEl?.previousElementSibling;

		if (!popupEl || !targetEl) return;

		show = true;

		let middleware = [];

		if (popupOffset) {
			middleware.push(offsetMiddleware(popupOffset));
		}

		middleware.push(
			shiftMiddleware({
				padding: popupOffset
			})
		);

		middleware.push(flipMiddleware());

		computePosition(targetEl, popupEl, {
			placement,
			middleware
		}).then(({ x, y, ...rest }) => {
			left = `${x}px`;
			top = `${y}px`;
		});
	}

	function hidePopup() {
		if (trigger === 'hover') {
			timer = setTimeout(() => {
				show = false;
			}, 300);
		} else {
			show = false;
		}
	}

	const togglePopup = () => {
		show ? hidePopup() : showPopup();
	};

	function onOutside(event: Event) {
		if (!show) return;
		if (autoClose === true || autoClose === 'outside') {
			if (event.composedPath().some((path) => path == popupEl || path == targetEl)) {
				return;
			}
			show = false;
		}
	}

	function onClickPopup() {
		if (autoClose === true || autoClose === 'inside') {
			show = false;
		}
	}

	async function bind() {

		document.addEventListener('click', onOutside);
		popupEl?.addEventListener('click', onClickPopup);
	}

	function unbind() {
		if (timer) clearTimeout(timer);

		document.removeEventListener('click', onOutside);
		popupEl?.removeEventListener('click', onClickPopup);
	}

	onMount(() => {
		bind();
		return unbind;
	});

	$effect(() => {
		if (show) {
			showPopup();
		} else {
			hidePopup();
		}
	});

	let popupProps: $$Props = $derived({
		...restProps,
		class: ClassMerge({
			name: componentName,
			componentClass: {
				show
			},
			staticClassess: restProps.class
		}),
		style: `left: ${left}; top: ${top};`
	});
</script>

<div bind:this={popupEl} {...popupProps}>
	{@render children?.()}
</div>
