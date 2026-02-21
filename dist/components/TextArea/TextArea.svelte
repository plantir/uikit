<script lang="ts">
	import type {
		TextArea,
		TextAreaColor,
		TextAreaInputMode,
		TextAreaSize
	} from './TextArea.type.js';
	import './TextArea.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { Snippet } from 'svelte';

	let {
		label,
		placeholder,
		value = $bindable(''),
		inputmode = 'text',
		disabled = false,
		readonly = false,
		ghost = false,
		size,
		color,
		class: className,
		labelSnippet,
		...others
	}: TextArea & {
		labelSnippet?: Snippet;
	} = $props();

	let componentName = 'textarea';
	let componentClass = $derived({
		xs: size === 'xs',
		sm: size === 'sm',
		md: size === 'md',
		lg: size === 'lg',
		xl: size === 'xl',
		disabled,
		ghost,
		primary: color === 'primary',
		secondary: color === 'secondary',
		accent: color === 'accent',
		success: color === 'success',
		info: color === 'info',
		error: color === 'error',
		warning: color === 'warning',
		neutral: color === 'neutral'
	});
	let wrapperClass = $derived(
		ClassMerge({ name: `${componentName}-wrapper`, staticClassess: className })
	);
	let elClass = $derived(ClassMerge({ name: componentName, componentClass }));
</script>

<label class={wrapperClass}>
	{#if labelSnippet}
		{@render labelSnippet()}
	{:else if label}
		{label}
	{/if}
	<textarea {...others} {inputmode} {readonly} {disabled} bind:value {placeholder} class={elClass} />
</label>
