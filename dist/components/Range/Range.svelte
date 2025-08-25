<script lang="ts">
	import type { Range, RangeColor, RangeSize } from './Range.type.js';
	import './Range.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	type $$Props = Range;
	let componentName = 'range';
	export let label: string | undefined = undefined;
	export let value: string | number | undefined = undefined;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let size: RangeSize = undefined;
	export let color: RangeColor = undefined;
	export let min: string | number = 0;
	export let max: string | number = 100;
	export let step: string | number | undefined = undefined;
	$: componentClass = {
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		xl: size == 'xl',
		disabled: disabled,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		neutral: color == 'neutral'
	};
	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: elClass = ClassMerge({ name: componentName, componentClass });

	function onChange(e: any) {
		value = e.currentTarget.value;
	}
</script>

<label class={wrapperClass}>
	<slot name="label">
		{label}
	</slot>
	<input
		type="range"
		{...$$restProps}
		{readonly}
		{disabled}
		{value}
		class={elClass}
		on:change
		on:change={onChange}
		{min}
		{max}
		{step}
	/>
	{#if step}
		<slot name="steps">
			<div class="w-full flex justify-between text-xs px-2">
				{#each { length: Math.ceil((+max - +min) / +step) + 1 } as i, _}
					<span>|</span>
				{/each}
			</div>
		</slot>
	{/if}
	<slot />
</label>
