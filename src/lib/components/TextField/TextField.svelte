<script lang="ts">
	import type {
		TextField,
		TextFieldColor,
		TextFieldInputMode,
		TextFieldSize
	} from './TextField.type.js';
	import './TextField.scss';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import El from '$lib/utils/El.svelte';
	type $$Props = TextField;
	let componentName = 'text-field';
	export let label: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string = '';
	export let inputmode: TextFieldInputMode = 'text';
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let bordered: boolean = true;
	export let size: TextFieldSize = undefined;
	export let color: TextFieldColor = undefined;
	export let inputClass: string = '';

	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		disabled,
		bordered,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		natural: color == 'natural',
		"has-start": !!$$slots.start,
		"has-end": !!$$slots.end,
	};

	$: startWrapper = ClassMerge({ name: `${componentName}-start-wrapper` });
	$: endWrapper = ClassMerge({ name: `${componentName}-end-wrapper` });
	$: inputWrapper = ClassMerge({ name: `${componentName}-input-wrapper` });
	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: elClass = ClassMerge({ name: componentName, componentClass, staticClassess: inputClass });
	$: labelClass = ClassMerge({ name: `${componentName}-label` });
</script>

<label class={wrapperClass}>
	<slot name="label">
		{#if label}
			<span class={labelClass}>
				{label}
			</span>
		{/if}
	</slot>
	<El class={inputWrapper} >
		<El class={startWrapper}>
			<slot name = 'start' />
		</El>
		<input
		{...$$restProps}
		{readonly}
		{inputmode}
		{disabled}
		bind:value
		{placeholder}
		class={elClass}
		/>
		<El class={endWrapper}>
			<slot name = 'end' />
		</El>
	</El>
</label>
