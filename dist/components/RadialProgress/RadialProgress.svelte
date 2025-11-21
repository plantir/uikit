<script lang="ts">
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import type { RadialProgress, ProgressColor } from './RadialProgress.type.js';
	type $$Props = RadialProgress;
	let componentName = 'radial-progress';
	export let value: string | number | undefined = undefined;
	export let color: ProgressColor = undefined;
	export let size: string = '5rem';
	export let tick: string = 'calc(var(--daisy-size) / 10);';
	$: componentClass = {
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		neutral: color == 'neutral'
	};
	$: elClass = ClassMerge({ name: componentName, componentClass });
</script>

<div
	class={elClass}
	style="--daisy-value:{value};--daisy-size:{size};--daisy-thickness:{tick}"
	role="progressbar"
	{...$$restProps}
>
	<slot></slot>
</div>
