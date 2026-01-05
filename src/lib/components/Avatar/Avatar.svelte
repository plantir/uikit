<script lang="ts">
	import type { Avatar, AvatarColor, AvatarSize, AvatarMask, AvatarShape } from './Avatar.type.js';
	import './Avatar.css';
	import El from '$lib/utils/El.svelte';
	let {
		size = 'md',
		color,
		shape,
		mask,
		text,
		ring,
		online,
		offline,
		children,
		...others
	}: {
		size: AvatarSize;
		color: AvatarColor;
		shape: AvatarShape;
		mask: AvatarMask;
		ring: boolean;
		text: boolean;
		online: boolean;
		offline: boolean;
		children: any;
	} = $props();
	let componentName = 'avatar';
	let componentClass = $derived({
		size,
		mask,
		online,
		offline,
		shape,
		ring,
		text,
		color
	});
</script>

<El {componentName} {componentClass} {...others}>
	<div>
		{#if children}
			{@render children()}
		{/if}
	</div>
</El>
