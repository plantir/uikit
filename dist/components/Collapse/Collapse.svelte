<script lang="ts">
	import type { Collapse, CollapseColor, CollapseSize, CollapseVariant } from './Collapse.type.js';
	import './Collapse.css';
	import El from '../../utils/El.svelte';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	type $$Props = Collapse;
	let componentName = 'collapse';
	export let disabled: boolean = false;
	export let size: CollapseSize = undefined;
	export let color: CollapseColor = undefined;
	export let variant: CollapseVariant = undefined;
	export let dismissable = false;
	export let open = false;
	export let plus = false;
	export let arrow = !plus && true;

	$: componentClass = {
		open,
		plus,
		arrow,
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
	$: titleClass = ClassMerge({ name: `${componentName}-title` });
	$: contentClass = ClassMerge({ name: `${componentName}-content` });
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps}>
	<div class={titleClass} on:click={() => (open = !open)}>
		<slot name="title" />
	</div>

	<div class={contentClass}>
		<slot />
	</div>
	<!-- </div> -->
</El>
<!-- </span> -->
