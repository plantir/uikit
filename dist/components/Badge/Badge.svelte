<script lang="ts">
	import type { Badge, BadgeColor, BadgeSize, BadgeVariant } from './Badge.type.js';
	import './Badge.css';
	import El from '../../utils/El.svelte';
	import Button from '../Button/Button.svelte';
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';
	let {
		disabled = false,
		size = 'md',
		color,
		variant,
		dismissable,
		children,
		close_snippet = defaultCloseSnippet,
		onClose,
		...others
	}: {
		disabled?: boolean;
		size?: BadgeSize;
		color?: BadgeColor;
		variant?: BadgeVariant;
		dismissable?: boolean;
		children?: any;
		close_snippet?: Snippet;
		onClose?: any;
	} = $props();
	let componentName = 'badge';
	let show = $state(true);
	const closeBreadCrumb = () => {
		if (onClose) {
			onClose();
		}
		show = false;
	};
	let componentClass = $derived({
		size,
		disabled,
		dismissable,
		variant,
		color
	});
</script>

{#snippet defaultCloseSnippet()}
	✕
{/snippet}
{#if show}
	<span transition:fade>
		<El {componentName} {componentClass} {...others}>
			{#if children}
				{@render children()}
			{/if}
			{#if dismissable}
				<Button
					onclick={closeBreadCrumb}
					shape="circle"
					size="xs"
					variant="link"
					aria-label="close"
				>
					{@render close_snippet()}
				</Button>
			{/if}
		</El>
	</span>
{/if}
