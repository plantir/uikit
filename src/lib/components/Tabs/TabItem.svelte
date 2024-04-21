<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { TabCtxType, TabItem, TabItemColor, TabItemSize } from './TabItem.type.js';
	import './TabItem.scss';
	import { getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	type $$Props = TabItem;
	let componentName = 'tab-item';
	export let size: TabItemSize = undefined;
	export let color: TabItemColor = undefined;
	export let value: string | undefined = undefined;
	export let title: string | undefined = undefined;
	const ctx = getContext<TabCtxType>('ctx') ?? {};

	const selected = ctx.selected ?? writable<HTMLElement>();

	$: componentClass = {
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
	$: tabContentClass = ClassMerge({ name: `${componentName}-content` });
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
	<slot name="title">{title}</slot>
</El>
{#if active}
	<div class={tabContentClass}>
		<div>
			<slot />
		</div>
	</div>
{/if}
