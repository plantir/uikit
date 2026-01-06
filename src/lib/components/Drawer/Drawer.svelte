<script lang="ts">
	import type { Drawer } from './Drawer.type.js';
	import './Drawer.css';
	import El from '$lib/utils/El.svelte';
	import { fly, slide, blur, fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import { ClickOutside } from '$lib/utils/ClickOutside.js';
	import type { Snippet } from 'svelte';

	let {
		open = $bindable(false),
		right = false,
		top = false,
		bottom = false,
		left = !right && !top && !bottom ? true : false,
		backdrop = true,
		clickOutside = true,
		id = 'drawer-example',
		transitionType = 'fly',
		transitionParams = {
			x: top || bottom ? 0 : left ? -320 : 320,
			y: left || right ? 0 : top ? -320 : 320,
			duration: 200,
			easing: sineIn,
			axis: left || right ? 'x' : 'y'
		},
		children,
		...others
	}: Drawer & {
		children?: Snippet;
	} = $props();

	let componentName = 'drawer';
	let componentClass = $derived({
		open,
		left,
		right,
		top,
		bottom
	});
	let backdropClass = $derived(ClassMerge({ name: `${componentName}-backdrop` }));
	let contentClass = $derived(ClassMerge({ name: `${componentName}-content` }));

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
	<El {componentName} {componentClass} {...others}>
		{#if backdrop && clickOutside}
			<div role="presentation" class={backdropClass} onclick={() => open && handleDrawer()} />
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
			{#if children}
				{@render children({ open })}
			{/if}
		</div>
	</El>
{/if}
