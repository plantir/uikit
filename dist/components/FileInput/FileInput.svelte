<script lang="ts">
	import './FileInput.css';
	import El from '../../utils/El.svelte';
	import type { FileInput } from './FileInput.type.js';
	import type { GlobalColor, GlobalSize } from '../../utils/El.types.js';
	import TextField from '../TextField/TextField.svelte';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	type $$Props = FileInput;
	let componentName = 'file-input';
	export let value: any = '';
	export let color: GlobalColor = undefined;
	export let size: GlobalSize = 'md';
	export let label: string = '';
	export let custom: boolean = false;
	export let multiple: boolean = false;
	export let placeholder = '';
	export let accept = '';
	let input: any = {};
	$: componentClass = {
		size
	};
	$: elClass = ClassMerge({ name: componentName, componentClass, staticClassess: $$props.class });
	$: labelClass = ClassMerge({ name: 'label', componentClass });
	const selectFile = (e: Event) => {
		input.click();
	};
	const checkFiles = () => {
		if (multiple) {
			value = input.files;
		} else {
			value = input.files[0];
		}
	};
	let inputValue: any = '';
	$: {
		value;
		if (value) {
			if (multiple) {
				inputValue = value.length + ' files';
			} else {
				inputValue = value.name;
			}
		} else {
			inputValue = placeholder;
		}
	}
</script>

<!-- <span transition:fade> -->
{#if custom}
	<div class={elClass} onclick={selectFile}>
		<input type="file" bind:this={input} {accept} oninput={checkFiles} {multiple} style="display: none;" />
		<slot></slot>
	</div>
{:else}
	<label class={elClass}>
		{#if label}
			<div class={labelClass}>{label}</div>
		{/if}
		<input type="file" bind:this={input} {accept} oninput={checkFiles} class="hidden" {multiple} />
		<TextField value={inputValue} readonly {size} {color} onclick={selectFile}></TextField>
	</label>
{/if}
<!-- </span> -->
