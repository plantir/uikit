<script lang="ts">
	import type { Avatar, AvatarColor, AvatarSize, AvatarMask, AvatarShape } from './Avatar.type.js';
	import './Avatar.css';
	import El from '../../utils/El.svelte';
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
		size,
		// xs: size == 'xs',
		// sm: size == 'sm',
		// md: size == 'md',
		// lg: size == 'lg',
		mask,
		// [`mask-${mask}`]: mask,
		online,
		offline,
		shape,
		// circle: shape == 'circle',
		// rounded: shape == 'rounded',
		// square: shape == 'square',
		ring,
		text,
		color
	};
</script>

<El {componentName} {componentClass} {...$$restProps}>
	<div>
		<slot />
	</div>
</El>
