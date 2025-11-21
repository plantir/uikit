<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Card } from './Card.type.ts';

	type $$Props = Card;
	let componentName = 'card';
	export let color: Card['color'] = undefined;
	export let size: Card['size'] = 'md';
	export let border: Card['border'] = false;
	export let dashed: Card['dashed'] = false;
	export let fullImage: Card['fullImage'] = false;
	export let side: Card['side'] = false;
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		xl: size == 'xl',
		border: border,
		dashed: dashed,
		'full-image': fullImage,
		side: side,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		neutral: color == 'neutral'
	};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<slot />
</El>
