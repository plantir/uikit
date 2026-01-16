<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import { getCheckboxGroupContext } from '../CheckboxGroup/CheckboxGroup.svelte';
	import type { Checkbox } from './Checkbox.type.js';
	// import './Checkbox.css';

	type $$Props = Checkbox;
	let componentName = 'checkbox';

	export let checked: $$Props['checked'] = false;
	export let label: $$Props['label'] = undefined;
	export let value: $$Props['value'] = '';
	export let disabled: $$Props['disabled'] = false;
	export let indeterminate: $$Props['indeterminate'] = false;
	export let size: $$Props['size'] = undefined;
	export let color: $$Props['color'] = undefined;

	let node: HTMLInputElement;
	function makeIndeterminate() {
		if (node && indeterminate) {
			node.indeterminate = true;
		}
	}

	const ctx = getCheckboxGroupContext();
	const selected = ctx?.selected ?? writable();
	const disabledStore = ctx?.disabled;
	$: disabledCombined = disabledStore ? disabled || $disabledStore : disabled;
	function onChange(e: any) {
		if (!ctx) return;
		if (e.target.checked) {
			$selected = [...$selected, e.currentTarget.value];
		} else {
			$selected = $selected.filter((value) => value !== e.currentTarget.value);
		}
	}

	onMount(() => {
		indeterminate && makeIndeterminate();

		if (ctx && value) {
			checked = $selected.includes(value);
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
		natural: color == 'natural',
		diabled: disabledCombined
	};

	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: elClass = ClassMerge({ name: componentName, componentClass });
	$: indeterminate, makeIndeterminate();
</script>

<label class={wrapperClass}>
	<input
		bind:this={node}
		type="checkbox"
		disabled={disabledCombined}
		{value}
		class={elClass}
		bind:checked
		on:change={onChange}
		on:change
		on:click
	/>
	<slot name="label">
		{label}
	</slot>
</label>
