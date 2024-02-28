<script lang="ts">
	import type { Action } from 'svelte/action';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { ClassMerge } from './ClassMerge.js';

	const noop = () => {};
	interface $$Props extends HTMLAnchorAttributes {
		componentClass?: object;
		componentName?: string;
		tag?: string;
		node?: HTMLElement | undefined;
		use?: Action<HTMLElement, any>;
		options?: object;
		class?: string;
		role?: string;
	}
	export let componentName: string = 'El';
	export let componentClass: object = {};
	export let tag: string = $$restProps.href ? 'a' : 'div';
	export let rounded: boolean = false;
	export let border: boolean = false;
	export let shadow: boolean = false;

	export let node: HTMLElement | undefined = undefined;
	// Action function and its params
	export let use: Action<HTMLElement, any> = noop;
	export let options = {};
	export let role: string | undefined = undefined;
	let frameClass: string;
	$: frameClass = ClassMerge({
		name: componentName,
		componentClass,
		staticClassess: $$props.class
	});
</script>

<svelte:element
	this={tag}
	use:use={options}
	bind:this={node}
	{role}
	{...$$restProps}
	class={frameClass}
	on:click
	on:change
	on:mouseenter
	on:mouseleave
	on:focusin
	on:focusout
>
	<slot />
</svelte:element>
