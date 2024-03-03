<script lang="ts">
	import type { Dialog } from './Dialog.type.js';
	import './Dialog.scss';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import Button from '../Button/Button.svelte';
	type $$Props = Dialog;
	let componentName = 'dialog';
	export let open: boolean = false;
	$: componentClass = {};
	$: elClass = ClassMerge({ name: componentName, componentClass });
	$: boxClass = ClassMerge({ name: `${componentName}-box` });
	$: backdropClass = ClassMerge({ name: `${componentName}-backdrop` });

	function close() {
		open = false;
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
			class="absolute right-2 top-2"
		>
			<slot name="close">✕</slot>
		</Button>
	</div>
	<div on:click={close} class={backdropClass}></div>
</dialog>
