<script lang="ts">
	import { writable } from 'svelte/store';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import { getRadioGroupContext } from '../RadioGroup/RadioGroup.svelte';
	import type { Radio, RadioColor, RadioSize } from './Radio.type.js';
	import './Radio.css';
	import { onMount } from 'svelte';

	type $$Props = Radio;

	let componentName = 'radio';

	export let label: $$Props['label'] = undefined;
	export let value: $$Props['value'] = '';
	export let disabled: $$Props['disabled'] = false;
	export let size: $$Props['size'] = undefined;
	export let color: $$Props['color'] = undefined;
	export let button: $$Props['button'] = false;

	const ctx = getRadioGroupContext();
	const disabledStore = ctx?.disabled;
	const selected = ctx?.selected ?? writable();

	function onChange(e: any) {
		selected.set(e.currentTarget.value);
	}
	onMount(() => {
		if ($disabledStore) {
			disabled = true;
		}
	});
	$: disabledCombined = disabledStore ? disabled || $disabledStore : disabled;
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		xl: size == 'xl',
		disabled: disabledCombined,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		neutral: color == 'neutral',
		button,
		join: ctx?.join
	};
	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: elClass = ClassMerge({ name: componentName, componentClass });
</script>

{#if button}
	<input
		aria-label={label}
		type="radio"
		checked={$selected == value}
		disabled={disabledCombined}
		{value}
		class={elClass}
		on:change={onChange}
	/>
{:else}
	<label class={wrapperClass}>
		<input
			type="radio"
			checked={$selected == value}
			disabled={disabledCombined}
			{value}
			class={elClass}
			on:change={onChange}
		/>
		<slot name="label">
			{label}
		</slot>
	</label>
{/if}
