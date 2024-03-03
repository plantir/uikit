<script lang="ts">
	import type { Switch, SwitchColor, SwitchSize } from './Switch.type.js';
	import './Switch.scss';
	import { ClassMerge } from '@plantir/uikit/utils/ClassMerge.js';
	type $$Props = Switch;
	let componentName = 'switch';
	export let label: string | undefined = undefined;
	export let value: string = '';
	export let disabled: boolean = false;
	export let size: SwitchSize = undefined;
	export let color: SwitchColor = undefined;
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
	<input type="checkbox" {disabled} {value} class={elClass} bind:checked={value}  on:change />
	<slot name="label">
		{label}
	</slot>
</label>
