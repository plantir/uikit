<!-- <script lang="ts">
	import type {
		Accordion,
		AccordionColor,
		AccordionSize,
		AccordionMask,
		AccordionShape
	} from './Accordion.type.js';
	// import './Accordion.css';
	import El from '$lib/utils/El.svelte';
	type $$Props = Accordion;
	let componentName = 'accordion';
	export let size: AccordionSize = 'md';
	export let color: AccordionColor = undefined;
	export let shape: AccordionShape = undefined;
	export let mask: AccordionMask = undefined;
	export let ring = false;
	export let text = false;
	export let online = false;
	export let offline = false;
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		[`mask-${mask}`]: mask,
		online,
		offline,
		circle: shape == 'circle',
		rounded: shape == 'rounded',
		square: shape == 'square',
		ring,
		text,
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

<El {componentName} {componentClass} {...$$restProps}>
	<div>
		<slot />
	</div>
</El> -->
