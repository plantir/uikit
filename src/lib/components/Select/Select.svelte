<script lang="ts">
	import type { Select, SelectColor, SelectSize } from './Select.type.ts';
	import './Select.css';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	type $$Props = Select;
	let componentName = 'select';

	export let label: string | undefined = undefined;
	export let items: any[] = [];
	export let disabled: boolean = false;
	export let bordered: boolean = true;
	export let multiple: boolean = false;
	export let size: SelectSize = undefined;
	export let color: SelectColor = undefined;
	export let placeholder: string | undefined = undefined;
	export let state: 'invalid' | 'valid' | undefined = undefined;
	export let hint: string | undefined = undefined;
	export let value: string | string[] = multiple ? [] : '';

	$: convertedItems = items.map((item) => {
		if (typeof item == 'string') {
			return {
				title: item,
				value: item
			};
		} else {
			return item;
		}
	});
	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: labelClass = ClassMerge({ name: `${componentName}-label` });
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		xl: size == 'xl',
		disabled,
		bordered,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		neutral: color == 'neutral',
		multiple,
		'state-valid': state === 'valid',
		'state-invalid': state === 'invalid'
	};
	$: elClass = ClassMerge({
		name: componentName,
		componentClass,
		staticClassess: $$props.class
	});
	$: hintClass = ClassMerge({
		name: `${componentName}-hint`,
		componentClass: {
			'state-valid': state == 'valid',
			'state-invalid': state == 'invalid'
		}
	});
</script>

<label class={wrapperClass}>
	<slot name="label">
		{#if label}
			<span class={labelClass}>
				{label}
			</span>
		{/if}
	</slot>
	{#if multiple}
		<select {...$$restProps} {disabled} multiple bind:value class={elClass} on:change>
			{#if placeholder}
				<option disabled selected value="">{placeholder}</option>
			{/if}
			{#each convertedItems as { value: key, title }}
				<option value={key} selected={value.includes(key)}>{title}</option>
			{/each}
		</select>
	{:else}
		<select {...$$restProps} {disabled} bind:value class={elClass} on:change>
			{#if placeholder}
				<option disabled selected value="">{placeholder}</option>
			{/if}
			{#each convertedItems as { value: key, title }}
				<option value={key} selected={value === key}>{title}</option>
			{/each}
		</select>
	{/if}
	{#if hint}
		<span class={hintClass}>{hint}</span>
	{/if}
</label>
