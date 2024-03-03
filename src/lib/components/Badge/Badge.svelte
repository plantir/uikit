<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { Badge, BadgeColor, BadgeSize, BadgeVariant } from './Badge.type.js';
	import './Badge.scss';
	type $$Props = Badge;
	let componentName = 'badge';
	export let disabled: boolean = false;
	export let size: BadgeSize = undefined;
	export let color: BadgeColor = undefined;
	export let variant:BadgeVariant = undefined;

	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		disabled: disabled,
		outline: variant == 'outline',
		glass: variant == 'glass',
		link: variant == 'link',
		ghost: variant == 'ghost',
		dot: variant == 'dot',
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





<El  {componentName} {componentClass} {...$$restProps} on:click>
	<slot />
</El>
