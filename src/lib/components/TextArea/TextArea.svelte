<script lang="ts">
	import type {
		TextArea,
		TextAreaColor,
		TextAreaInputMode,
		TextAreaSize
	} from './TextArea.type.js';
	import './TextArea.scss';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	type $$Props = TextArea;
	let componentName = 'textarea';
	export let label: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string = '';
	export let inputmode: TextAreaInputMode = 'text';
	export let disabled: boolean = false;
	export let bordered: boolean = true;
	export let size: TextAreaSize = undefined;
	export let color: TextAreaColor = undefined;
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
	<textarea {...$$restProps} {inputmode} {disabled} bind:value {placeholder} class={elClass} />
</label>
