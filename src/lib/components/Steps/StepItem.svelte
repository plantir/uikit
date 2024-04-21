<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { TabCtxType, StepItem, StepItemColor, StepItemSize } from './StepItem.type.js';
	import './StepItem.scss';
	import { getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	type $$Props = StepItem;
	let componentName = 'step-item';
	export let size: StepItemSize = undefined;
	export let color: StepItemColor = undefined;
	export let value: string | undefined = undefined;
	export let title: string | undefined = undefined;
	const ctx = getContext<TabCtxType>('ctx') ?? {};

	const selected = ctx.selected ?? writable<HTMLElement>();

	$: componentClass = {
		'daisy-step': true,
		active,
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		natural: color == 'natural'
	};
	$: active = $selected == value;

	const onClick = () => {
		selected.set(value);
	};
</script>

<El
	{componentName}
	{componentClass}
	{...$$restProps}
	on:click
	on:blur
	on:click
	on:contextmenu
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:click={onClick}
>
	<slot />
</El>
<!-- {#if active}
	<div class={tabContentClass}>
		<div>
			<slot />
		</div>
	</div>
{/if} -->
