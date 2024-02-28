<script lang="ts">
	import Loading from '../Loading/Loading.svelte';
	import El from '@plantir/uikit/utils/El.svelte';
	import type {
		Button,
		ButtonColor,
		ButtonShape,
		ButtonSize,
		ButtonVariant
	} from './Button.type.ts';
	type $$Props = Button;
	let componentName = 'button';
	export let disabled: boolean = false;
	export let href: string = '';
	export let loading = false;
	export let wide = false;
	export let active = false;
	export let block = false;
	export let size: ButtonSize = undefined;
	export let variant: ButtonVariant = undefined;
	export let shape: ButtonShape = undefined;
	export let color: ButtonColor = undefined;
	$: componentClass = {
		wide,
		block,
		loading,
		active,
		outline: variant == 'outline',
		glass: variant == 'glass',
		link: variant == 'link',
		ghost: variant == 'ghost',
		square: shape == 'square',
		circle: shape == 'circle',
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		disabled: disabled || loading,
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

<!-- <svelte:element
	this={href ? 'a' : 'button'}
	role="button"
	on:click
	{href}
	class={frameClass}
	tabindex={disabled ? -1 : 0}
>
</svelte:element> -->
<El tag={href ? 'a' : 'button'} {componentName} {componentClass} {...$$restProps} on:click>
	{#if loading}
		<slot name="loader">
			<Loading class="loading-xs" />
		</slot>
	{:else}
		<slot />
	{/if}
</El>

<style lang="scss" global>
	@import './Button.scss';
</style>
