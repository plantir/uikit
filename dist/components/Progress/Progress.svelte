<script lang="ts">
	// import './Progress.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { Progress, ProgressColor, ProgressSize } from './Progress.type.js';
	type $$Props = Progress;
	let componentName = 'progress';
	export let label: string | undefined = undefined;
	export let value: string | number | undefined = undefined;
	export let color: ProgressColor = undefined;
	export let max: string | number | undefined = 100;
	$: componentClass = {
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		natural: color == 'natural'
	};
	$: elClass = ClassMerge({ name: componentName, componentClass });
</script>

<progress {...$$restProps} {value} class={elClass} {max} />
