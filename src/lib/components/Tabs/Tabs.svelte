<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	interface TabCtxType {
		selected: Writable<string | number>;
	}

	let ctx = {};

	export function setTabsContext(value: TabCtxType) {
		return setContext(ctx, value);
	}
	export function getTabsContext(): TabCtxType {
		return getContext(ctx);
	}
</script>

<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import El from '$lib/utils/El.svelte';
	import type { Tab } from './Tabs.type.js';
	import './Tabs.css';
	import type { Snippet } from 'svelte';

	let {
		size,
		variant,
		color,
		selected = $bindable(undefined),
		children,
		...others
	}: Tab & {
		children?: Snippet;
	} = $props();

	let componentName = 'tabs';

	const ctx = setTabsContext({
		selected: writable(selected)
	});

	ctx.selected.subscribe((val) => {
		selected = val;
	});

	let componentClass = $derived({
		bordered: variant === 'border',
		boxed: variant === 'box',
		lifted: variant === 'lift',
		xs: size === 'xs',
		sm: size === 'sm',
		md: size === 'md',
		lg: size === 'lg',
		xl: size === 'xl',
		primary: color === 'primary',
		secondary: color === 'secondary',
		accent: color === 'accent',
		success: color === 'success',
		info: color === 'info',
		error: color === 'error',
		warning: color === 'warning',
		neutral: color === 'neutral'
	});
</script>

<El {componentName} {componentClass} {...others} onclick>
	{#if children}
		{@render children()}
	{/if}
</El>
