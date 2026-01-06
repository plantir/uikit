<script lang="ts">
	import type { Collapse, CollapseColor, CollapseSize, CollapseVariant } from './Collapse.type.js';
	import './Collapse.css';
	import El from '$lib/utils/El.svelte';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import type { Snippet } from 'svelte';
	let {
		disabled = false,
		size,
		color,
		variant,
		dismissable = false,
		open = false,
		plus = false,
		arrow = false,
		children,
		title,
		...others
	}: {
		disabled?: boolean;
		size?: CollapseSize;
		color?: CollapseColor;
		variant?: CollapseVariant;
		dismissable?: boolean;
		open?: boolean;
		plus?: boolean;
		arrow?: boolean;
		children: Snippet;
		title: Snippet;
	} = $props();
	let componentName = 'collapse';
	let componentClass = $derived({
		open,
		plus,
		arrow,
		disabled,
		color
	});
	let titleClass = $derived(ClassMerge({ name: `${componentName}-title` }));
	let contentClass = $derived(ClassMerge({ name: `${componentName}-content` }));
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others}>
	<div class={titleClass} onclick={() => (open = !open)}>
		{@render title()}
	</div>

	<div class={contentClass}>
		{@render children()}
	</div>
	<!-- </div> -->
</El>
<!-- </span> -->
