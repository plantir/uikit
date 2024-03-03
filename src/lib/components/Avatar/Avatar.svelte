<script lang="ts">
	import type { Avatar, AvatarColor, AvatarSize, AvatarMask, AvatarShape } from './Avatar.type.js';
	import './Avatar.scss';
	import El from '$lib/utils/El.svelte';
	type $$Props = Avatar;
	let componentName = 'avatar';
	export let size: AvatarSize = 'md';
	export let color: AvatarColor = undefined;
	export let shape: AvatarShape = undefined;
	export let mask: AvatarMask = undefined;
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
</El>
