<script lang="ts">
	import './FileInput.css';
	import El from '../../utils/El.svelte';
	import type { FileInput } from './FileInput.type.js';
	import type { GlobalColor, GlobalSize } from '../../utils/El.types.js';
	import TextField from '../TextField/TextField.svelte';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { Snippet } from 'svelte';

	let {
		value = $bindable(),
		color,
		size = 'md',
		label = '',
		custom = false,
		multiple = false,
		placeholder = '',
		accept = '',
		class: className,
		children,
		...others
	}: FileInput & {
		children?: Snippet;
	} = $props();

	// Initialize value if undefined (for bindable without fallback)
	$effect(() => {
		if (value === undefined) {
			value = '';
		}
	});

	let componentName = 'file-input';
	let input: HTMLInputElement | undefined = $state();
	let componentClass = $derived({
		size
	});
	let elClass = $derived(
		ClassMerge({ name: componentName, componentClass, staticClassess: className })
	);
	let labelClass = $derived(ClassMerge({ name: 'label', componentClass }));

	const selectFile = (e: Event) => {
		input?.click();
	};
	const checkFiles = () => {
		if (input) {
			if (multiple) {
				value = input.files;
			} else {
				value = input.files?.[0] || '';
			}
		}
	};

	let inputValue = $derived.by(() => {
		if (value) {
			if (multiple && Array.isArray(value)) {
				return value.length + ' files';
			} else if (value && typeof value === 'object' && 'name' in value) {
				return value.name;
			}
		}
		return placeholder;
	});

	let textFieldProps = $derived({
		value: inputValue,
		readonly: true,
		size,
		color,
		onclick: selectFile,
		...others
	} as any);
</script>

<!-- <span transition:fade> -->
{#if custom}
	<div class={elClass} onclick={selectFile} {...others}>
		<input
			type="file"
			bind:this={input}
			{accept}
			oninput={checkFiles}
			{multiple}
			style="display: none;"
		/>
		{#if children}
			{@render children()}
		{/if}
	</div>
{:else}
	<label class={elClass}>
		{#if label}
			<div class={labelClass}>{label}</div>
		{/if}
		<input type="file" bind:this={input} {accept} oninput={checkFiles} class="hidden" {multiple} />
		<TextField {...textFieldProps}></TextField>
	</label>
{/if}
<!-- </span> -->
