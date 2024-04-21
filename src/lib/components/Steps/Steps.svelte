<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Step, StepColor, StepSize, StepVariant } from './Step.type.js';
	import './Steps.scss';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	type $$Props = Step;
	let componentName = 'steps';
	export let size: StepSize = undefined;
	export let variant: StepVariant = 'border';
	export let vertical: boolean = false;
	export let horizental: boolean = true;
	export let color: StepColor = undefined;
	export let selected: string | undefined = undefined;
	const ctx = {
		selected: writable<string>(selected)
	};
	setContext('ctx', ctx);
	ctx.selected.subscribe((val) => {
		selected = val;
	});
	$: componentClass = {
		vertical,
		horizental,
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
