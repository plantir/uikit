<script lang="ts">
	import {createEventDispatcher} from 'svelte'
	import type { Dialog } from './Dialog.type.js';
	// import './Dialog.css';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import Button from '../Button/Button.svelte';
	type $$Props = Dialog;
	let componentName = 'dialog';
	export let open: boolean = false;

	const dispatch = createEventDispatcher();

	$: componentClass = {};
	$: elClass = ClassMerge({ name: componentName, componentClass });
	$: boxClass = ClassMerge({ name: `${componentName}-box` });
	$: backdropClass = ClassMerge({ name: `${componentName}-backdrop` });
	$: closeIconClass = ClassMerge({ name: `${componentName}-close-icon`})
	$: closeButtonClass = ClassMerge({ name: `${componentName}-close-button`})

	function close() {
		open = false;
		dispatch('close');
	}
</script>

<dialog id="my_modal_1" class={elClass} {open}>
	<div class={boxClass}>
		<slot>
			<h3 class="font-bold text-lg">Hello!</h3>
			<p class="py-4">Press ESC key or click the button below to close</p>
		</slot>
		<Button
			on:click={close}
			shape="circle"
			size="sm"
			variant="ghost"
			class="{closeButtonClass}"
		>
			<span class={closeIconClass}>
				<slot name="close">✕</slot>
			</span>
		</Button>
	</div>
	<div role="button" tabindex="0" on:keypress={close} on:click={close} class={backdropClass}></div>
</dialog>
