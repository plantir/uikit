<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Tab, TabColor, TabSize, TabVariant } from './Tabs.type.js';
	import './Tabs.scss';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	type $$Props = Tab;
	let componentName = 'tabs';
	export let size: TabSize = undefined;
	export let variant: TabVariant = 'border';
	export let color: TabColor = undefined;
	export let selected: string | number | undefined = undefined;
	const ctx = {
		selected: writable<string | number>(selected)
	};
	setContext('ctx', ctx);
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
