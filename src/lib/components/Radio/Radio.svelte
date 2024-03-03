<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Radio, RadioColor, RadioSize } from './Radio.type.js';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { RadioCtxType } from '../RadioGroup/RadioGroup.svelte';
	import { writable } from 'svelte/store';
	type $$Props = Radio;
	let componentName = 'radio';
	export let label: string | undefined = undefined;
	export let value: string = '';
	export let disabled: boolean = false;
	export let size: RadioSize = undefined;
	export let color: RadioColor = undefined;

	const ctx = getContext<RadioCtxType>('ctx') ?? {};
	const selected = ctx.selected ?? writable();
	function onChange(e: any) {
		selected.set(e.currentTarget.value);
	}

	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		disabled: disabled,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		natural: color == 'natural'
	};
	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: elClass = ClassMerge({ name: componentName, componentClass });
</script>

<label class={wrapperClass}>
	<input
		type="radio"
		checked={$selected == value}
		{disabled}
		{value}
		class={elClass}
		on:change={onChange}
	/>
	<slot name="label">
		{label}
	</slot>
</label>

<style lang="scss" global>
	@import './Radio.scss';
</style>
