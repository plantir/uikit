<script lang="ts">
	import Loading from '../Loading/Loading.svelte';
	import El from '$lib/utils/El.svelte';
	import type {
		Button,
		ButtonColor,
		ButtonShape,
		ButtonSize,
		ButtonVariant
	} from './Button.type.ts';
	import './Button.css';
	import type { Snippet } from 'svelte';
	let {
		disabled = false,
		href = '',
		loading = $bindable(false),
		wide = false,
		active = false,
		block = false,
		size,
		variant,
		shape,
		color,
		children,
		loader = defaultLoader,
		class: className,
		onclick,
		...others
	}: {
		disabled?: boolean;
		href?: string;
		loading?: boolean;
		wide?: boolean;
		active?: boolean;
		block?: boolean;
		size?: ButtonSize;
		variant?: ButtonVariant;
		shape?: ButtonShape;
		color?: ButtonColor;
		loader?: Snippet;
		class?: string;
		children?: Snippet;
		onclick?: () => void;
	} = $props();
	let componentName = 'button';
	let componentClass = $derived({
		wide,
		block,
		loading,
		active,
		variant,
		shape,
		size,
		disabled: disabled || loading,
		color
	});
</script>

{#snippet defaultLoader()}
	<Loading size="xs" />
{/snippet}
<El
	tag={href ? 'a' : 'button'}
	href={href ? href : undefined}
	{componentName}
	{componentClass}
	{...others}
	class={className}
	onclick={onclick}
>
	{#if loading}
		{@render loader()}
	{:else if children}
		{@render children()}
	{/if}
</El>
