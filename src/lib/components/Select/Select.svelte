<script lang="ts">
	import type { Select, SelectColor, SelectSize } from './Select.type.ts';
	import './Select.scss';
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
		multiple
	};
	$: elClass = ClassMerge({ name: componentName, componentClass, staticClassess: $$props.class });
</script>

{#if multiple}
	<select {...$$restProps} {disabled} multiple bind:value class={elClass} on:change>
		<option disabled selected value="">{label}</option>
		{#each convertedItems as { value: key, title }}
			<option value={key} selected={value.includes(key)}>{title}</option>
		{/each}
	</select>
{:else}
	<select {...$$restProps} {disabled} bind:value class={elClass} on:change>
		<option disabled selected value="">{label}</option>
		{#each convertedItems as { value: key, title }}
			<option value={key} selected={value === key}>{title}</option>
		{/each}
	</select>
{/if}