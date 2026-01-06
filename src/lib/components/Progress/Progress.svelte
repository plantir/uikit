<script lang="ts">
	import './Progress.css';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Progress, ProgressColor, ProgressSize } from './Progress.type.js';

	let {
		value=$bindable(),
		color,
		max = 100,
		...others
	}: Progress = $props();

	let componentName = 'progress';
	let componentClass = $derived({
		primary: color === 'primary',
		secondary: color === 'secondary',
		accent: color === 'accent',
		success: color === 'success',
		info: color === 'info',
		error: color === 'error',
		warning: color === 'warning',
		neutral: color === 'neutral'
	});
	let elClass = $derived(ClassMerge({ name: componentName, componentClass }));
</script>

<progress {value} class={elClass} {max} ></progress>
