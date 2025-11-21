<script lang="ts">
	import type {
		TextField,
		TextFieldColor,
		TextFieldInputMode,
		TextFieldSize
	} from './TextField.type.js';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import El from '../../utils/El.svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	type $$Props = TextField;
	let componentName = 'text-field';
	export let label: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string = '';
	export let type: HTMLInputTypeAttribute = 'text';
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let size: TextFieldSize = undefined;
	export let color: TextFieldColor = undefined;
	export let hint: string | undefined = undefined;
	export let state: 'invalid' | 'valid' | undefined = undefined;
	export let ghost: boolean = false;
	export let inputClass: string = '';
	export let node: TextField['node'];
	export let suggestions: string[] | undefined = undefined;
	export let pattern: any = '';
	let show_hint_pattern = false;
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		xl: size == 'xl',
		disabled,
		ghost,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		neutral: color == 'neutral',
		pattern: pattern !== '',
		'has-start': !!$$slots.start,
		'has-end': !!$$slots.end,
		'state-valid': state == 'valid',
		'state-invalid': state == 'invalid'
	};

	$: startWrapper = ClassMerge({ name: `${componentName}-start-wrapper` });
	$: endWrapper = ClassMerge({ name: `${componentName}-end-wrapper` });
	$: inputWrapper = ClassMerge({ name: `${componentName}-input-wrapper` });
	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: elClass = ClassMerge({ name: componentName, componentClass, staticClassess: inputClass });
	$: labelClass = ClassMerge({ name: `${componentName}-label` });
	$: hintClass = ClassMerge({
		name: `${componentName}-hint`,
		componentClass: {
			'state-valid': state == 'valid',
			'state-invalid': state == 'invalid',
			'pattern-invalid': pattern && !show_hint_pattern
		}
	});
	$: list = suggestions && suggestions.length ? `list-${Math.floor(Math.random() * 100000)}` : '';
	$: {
		value;
		if (pattern && node) {
			if (node.validity.valid || node.validity.valueMissing) {
				show_hint_pattern = true;
			} else {
				show_hint_pattern = false;
			}
		}
	}
</script>

<label class={wrapperClass}>
	<slot name="label">
		{#if label}
			<span class={labelClass}>
				{label}
			</span>
		{/if}
	</slot>
	<El class={inputWrapper}>
		<El class={startWrapper}>
			<slot name="start" />
		</El>
		<input
			{...$$restProps}
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
			<slot name="end" />
		</El>
	</El>
	{#if hint}
		<span class={hintClass}>{@html hint}</span>
	{/if}
</label>
