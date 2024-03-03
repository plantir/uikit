<script lang="ts">
	import type {
		TextField,
		TextFieldColor,
		TextFieldInputMode,
		TextFieldSize
	} from './TextField.type.js';
	import './TextField.scss';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	type $$Props = TextField;
	let componentName = 'text-field';
	export let node: any = undefined;
	export let label: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string = '';
	export let inputmode: TextFieldInputMode = 'text';
	export let disabled: boolean = false;
	export let bordered: boolean = true;
	export let size: TextFieldSize = undefined;
	export let color: TextFieldColor = undefined;
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
		natural: color == 'natural'
	};
	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: elClass = ClassMerge({ name: componentName, componentClass });
</script>

<label class={wrapperClass}>
	<slot name="label">
		{label}
	</slot>
	<input {...$$restProps} {inputmode} {disabled} bind:value {placeholder} class={elClass} />
</label>
