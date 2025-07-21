<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';

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
	// import './Tabs.css';

	type $$Props = Tab;
	let componentName = 'tabs';

	export let size: $$Props['size'] = undefined;
	export let variant: $$Props['variant'] = 'border';
	export let color: $$Props['color'] = undefined;
	export let selected: $$Props['selected'] = undefined;

	const ctx = setTabsContext({
		selected: writable(selected)
	});
	
	ctx.selected.subscribe((val) => {
		selected = val;
	});
	
	$: componentClass = {
		bordered: variant == 'border',
		boxed: variant == 'box',
		lifted: variant == 'lift',
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
</script>

<El {componentName} {componentClass} {...$$restProps} on:click>
	<slot />
</El>
