<script lang="ts">
	import type { Drawer } from './Drawer.type.js';
	import El from '$lib/utils/El.svelte';
	import { fly, slide, blur, fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import { ClickOutside } from '$lib/utils/ClickOutside.js';
	type $$Props = Drawer;
	let componentName = 'drawer';
	export let open: boolean = false;
	export let right: boolean = false;
	export let top: boolean = false;
	export let bottom: boolean = false;
	export let left: boolean = !right && !top && !bottom;
	export let backdrop: boolean = true;
	export let clickOutside: boolean = true;
	export let id: string = 'drawer-example';
	export let transitionType = 'fly';
	export let transitionParams = {
		x: top || bottom ? 0 : left ? -320 : 320,
		y: left || right ? 0 : top ? -320 : 320,
		duration: 200,
		easing: sineIn,
		axis: left || right ? 'x' : 'y'
	};
	$: componentClass = {
		open,
		left,
		right,
		top,
		bottom
	};
	$: backdropClass = ClassMerge({ name: `${componentName}-backdrop` });
	$: contentClass = ClassMerge({ name: `${componentName}-content` });
	function multiple(node: HTMLElement, params: any) {
		switch (transitionType) {
			case 'slide':
				return slide(node, params);
			case 'blur':
				return blur(node, params);
			case 'fade':
				return fade(node, params);
			default:
				return fly(node, params);
		}
	}

	const handleDrawer = () => {
		open = !open;
	};
	const handleClickOutside = () => clickOutside && open && handleDrawer();
	function ClickOutsideWrapper(node: HTMLElement, callback: () => void) {
		return clickOutside ? ClickOutside(node, callback) : undefined;
	}
</script>

{#if open}
	<El {componentName} {componentClass} {...$$restProps}>
		{#if backdrop && clickOutside}
			<div role="presentation" class={backdropClass} on:click={() => open && handleDrawer()} />
		{:else if backdrop && !clickOutside}
			<div role="presentation" class={backdropClass} />
		{/if}

		<div
			use:ClickOutsideWrapper={handleClickOutside}
			transition:multiple={transitionParams}
			class={contentClass}
			{id}
			tabindex="-1"
			aria-controls={id}
			aria-labelledby={id}
		>
			<slot {open} />
		</div>
	</El>
{/if}
