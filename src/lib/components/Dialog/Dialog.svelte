<script lang="ts">
	import type { Dialog, dialogPlacement } from './Dialog.type.js';
	import './Dialog.css';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import Button from '../Button/Button.svelte';
	import type { Snippet } from 'svelte';

	let {
		open = $bindable(false),
		placement = 'middle',
		onClose,
		children = defaultChildren,
		closeSnippet = defaultCloseSnippet,
		...others
	}: Dialog & {
		onClose?: () => void;
		children?: Snippet;
		closeSnippet?: Snippet;
	} = $props();

	let componentName = 'dialog';
	let componentClass = $derived({
		placement: placement
	});
	let elClass = $derived(ClassMerge({ name: componentName, componentClass }));
	let boxClass = $derived(ClassMerge({ name: `${componentName}-box` }));
	let backdropClass = $derived(ClassMerge({ name: `${componentName}-backdrop` }));
	let closeIconClass = $derived(ClassMerge({ name: `${componentName}-close-icon` }));
	let closeButtonClass = $derived(ClassMerge({ name: `${componentName}-close-button` }));

	function close() {
		open = false;
		onClose?.();
	}

	function handleKeypress(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			close();
		}
	}
</script>

{#snippet defaultChildren()}
	<h3 class="font-bold text-lg">Hello!</h3>
	<p class="py-4">Press ESC key or click the button below to close</p>
{/snippet}

{#snippet defaultCloseSnippet()}
	✕
{/snippet}

<dialog id="my_modal_1" class={elClass} open={open} {...others}>
	<div class={boxClass}>
		{@render children()}
		<Button onclick={close} shape="circle" size="sm" variant="ghost" class={closeButtonClass}>
			<span class={closeIconClass}>
				{@render closeSnippet()}
			</span>
		</Button>
	</div>
	<div
		role="button"
		tabindex="0"
		onkeypress={handleKeypress}
		onclick={close}
		class={backdropClass}
	></div>
</dialog>
