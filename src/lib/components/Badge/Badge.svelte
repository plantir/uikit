<script lang="ts">
	import type { Badge, BadgeColor, BadgeSize, BadgeVariant } from './Badge.type.js';
	import './Badge.scss';
	import El from '$lib/utils/El.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	type $$Props = Badge;
	let componentName = 'badge';
	export let disabled: boolean = false;
	export let size: BadgeSize = undefined;
	export let color: BadgeColor = undefined;
	export let variant: BadgeVariant = undefined;
	export let dismissable = false;
	let dispatch = createEventDispatcher();
	let show = true;
	function close() {
		dispatch('close');
		show = false;
	}
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		disabled: disabled,
		dismissable,
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

{#if show}
	<span transition:fade>
		<El {componentName} {componentClass} {...$$restProps}>
			<slot />
			{#if dismissable}
				<Button on:click={close} shape="circle" size="xs" variant="link" aria-label="close">
					<slot name="close">✕</slot>
				</Button>
			{/if}
		</El>
	</span>
{/if}
