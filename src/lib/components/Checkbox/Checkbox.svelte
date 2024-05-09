<script lang="ts">
	import type { Checkbox, CheckboxColor, CheckboxSize } from './Checkbox.type.js';
	import './Checkbox.scss';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import { getContext, onMount } from 'svelte';
	import type { CheckboxCtxType } from '../CheckboxGroup/CheckboxGroup.svelte';
	import { writable } from 'svelte/store';
	type $$Props = Checkbox;
	let componentName = 'checkbox';

	export let checked: boolean = false;
	export let label: string | undefined = undefined;
	export let value: string | boolean = '';
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

	const ctx = getContext<CheckboxCtxType>('ctx') ?? {};
	const selected = ctx.selected ?? writable();
	function onChange(e: any) {
		if(!ctx)return;
		if (e.target.checked) {
			$selected = [...$selected, e.currentTarget.value];
		} else {
			$selected = $selected.filter((value) => value !== e.currentTarget.value);
		}
	}

	onMount(() => {
		indeterminate && makeIndeterminate();
		
		if(ctx){//initialize from checkboxgroup
			checked = $selected.includes(value)
		}
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
		bind:checked={checked}
		on:change = {onChange}
		on:change
	/>
	<slot name="label">
		{label}
	</slot>
</label>
