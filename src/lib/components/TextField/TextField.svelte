<script lang="ts">
	import type {
		TextField,
		TextFieldColor,
		TextFieldInputMode,
		TextFieldSize
	} from './TextField.type.js';
	import './TextField.css';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import El from '$lib/utils/El.svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	let {
		label,
		placeholder,
		value = $bindable(),
		type = 'text',
		disabled,
		readonly,
		size,
		color,
		hint,
		state: stateString,
		ghost,
		inputClass,
		node = $bindable(),
		suggestions,
		pattern,
		labelSnippet = defaultLabelSnippet,
		startSnippet,
		endSnippet,
		class: className,
		...others
	}: TextField & {
		labelSnippet?: Snippet;
		startSnippet?: Snippet;
		endSnippet?: Snippet;
		class?: string;
	} = $props();
	let componentName = 'text-field';

	let show_hint_pattern = $state(false);

	let componentClass = $derived({
		size,
		disabled,
		ghost,
		color,
		pattern: pattern !== '',
		'has-start': !!startSnippet,
		'has-end': !!endSnippet,
		'state-valid': stateString == 'valid',
		'state-invalid': stateString == 'invalid'
	});

	let startWrapper = $derived(ClassMerge({ name: `${componentName}-start-wrapper` }));
	let endWrapper = $derived(ClassMerge({ name: `${componentName}-end-wrapper` }));
	let inputWrapper = $derived(ClassMerge({ name: `${componentName}-input-wrapper` }));
	let wrapperClass = $derived(
		ClassMerge({ name: `${componentName}-wrapper`, staticClassess: className })
	);
	let elClass = $derived(
		ClassMerge({ name: componentName, componentClass, staticClassess: inputClass })
	);
	let labelClass = $derived(ClassMerge({ name: `${componentName}-label` }));
	let hintClass = $derived(
		ClassMerge({
			name: `${componentName}-hint`,
			componentClass: {
				'state-valid': stateString == 'valid',
				'state-invalid': stateString == 'invalid',
				'pattern-invalid': pattern && !show_hint_pattern
			}
		})
	);

	let list = $derived(
		suggestions && suggestions.length ? `list-${Math.floor(Math.random() * 100000)}` : ''
	);
	$effect(() => {
		value;
		if (pattern && node) {
			if (node.validity.valid || node.validity.valueMissing) {
				show_hint_pattern = true;
			} else {
				show_hint_pattern = false;
			}
		}
	});
</script>

{#snippet defaultLabelSnippet()}
	{#if label}
		<span class={labelClass}>
			{label}
		</span>
	{/if}
{/snippet}
<label class={wrapperClass}>
	{@render labelSnippet()}
	<El class={inputWrapper}>
		<El class={startWrapper}>
			{#if startSnippet}
				{@render startSnippet()}
			{/if}
		</El>
		<input
			{...others}
			bind:this={node}
			{readonly}
			{type}
			{disabled}
			bind:value
			{placeholder}
			class={elClass}
			{pattern}
			{list}
		/>
		{#if list && suggestions}
			<datalist id={list}>
				{#each suggestions as _item}
					<option value={_item}></option>
				{/each}
			</datalist>
		{/if}
		<El class={endWrapper}>
			{#if endSnippet}
				{@render endSnippet()}
			{/if}
		</El>
	</El>
	{#if hint}
		<span class={hintClass}>{@html hint}</span>
	{/if}
</label>
