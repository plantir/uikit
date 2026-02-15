<script lang="ts">
	import type { Action } from 'svelte/action';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { ClassMerge } from './ClassMerge.js';
	import type { Snippet } from 'svelte';

	const noop = () => {};

	let {
		componentName = 'El',
		componentClass = {},
		href,
		tag = href ? 'a' : 'div',
		node,
		use = noop,
		options = {},
		role,
		class: className,
		children,
		onclick,
		onkeydown,
		onkeyup,
		onkeypress,
		onfocus,
		onblur,
		onmouseenter,
		onmouseleave,
		onmouseover,
		onmouseout,
		onmousedown,
		onmouseup,
		oncontextmenu,
		...others
	}: {
		componentClass?: object;
		componentName?: string;
		href?: string;
		tag?: string;
		node?: HTMLElement | undefined;
		use?: Action<HTMLElement, any>;
		options?: object;
		class?: string;
		role?: string;
		children?: Snippet;
		onclick?: (event: MouseEvent) => void;
		onkeydown?: (event: KeyboardEvent) => void;
		onkeyup?: (event: KeyboardEvent) => void;
		onkeypress?: (event: KeyboardEvent) => void;
		onfocus?: (event: FocusEvent) => void;
		onblur?: (event: FocusEvent) => void;
		onmouseenter?: (event: MouseEvent) => void;
		onmouseleave?: (event: MouseEvent) => void;
		onmouseover?: (event: MouseEvent) => void;
		onmouseout?: (event: MouseEvent) => void;
		onmousedown?: (event: MouseEvent) => void;
		onmouseup?: (event: MouseEvent) => void;
		oncontextmenu?: (event: MouseEvent) => void;
	} = $props();

	let frameClass = $derived(
		ClassMerge({
			name: componentName,
			componentClass,
			staticClassess: className
		})
	);
</script>

<svelte:element
	this={tag}
	use:use={options}
	bind:this={node}
	{role}
	{...others}
	class={frameClass}
	{href}
	{onclick}
	{onkeydown}
	{onkeyup}
	{onkeypress}
	{onfocus}
	{onblur}
	{onmouseenter}
	{onmouseleave}
	{onmouseover}
	{onmouseout}
	{onmousedown}
	{onmouseup}
	{oncontextmenu}
>
	{#if children}
		{@render children()}
	{/if}
</svelte:element>
