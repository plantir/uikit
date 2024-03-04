<script lang="ts">
	import type { Checkbox, CheckboxColor, CheckboxSize } from './Checkbox.type.js';
	import './Checkbox.scss';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import { onMount } from 'svelte';
	type $$Props = Checkbox;
	let componentName = 'checkbox';
	export let label: string | undefined = undefined;
	export let value: string = '';
	export let disabled: boolean = false;
	export let indeterminate: boolean = false;
	export let size: CheckboxSize = undefined;
	export let color: CheckboxColor = undefined;
	let elm;
	function makeIndeterminate() {
		if (elm && indeterminate) {
			elm.indeterminate = true;
		}
	}
	onMount(() => {
		indeterminate && makeIndeterminate();
	});
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
	$: indeterminate, makeIndeterminate();
</script>

<label class={wrapperClass}>
	<input
		bind:this={elm}
		type="checkbox"
		{disabled}
		{value}
		class={elClass}
		bind:checked={value}
		on:change
	/>
	<slot name="label">
		{label}
	</slot>
</label>
