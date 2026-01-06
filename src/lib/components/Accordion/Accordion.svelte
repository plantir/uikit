<script lang="ts">
	import type { Accordion, AccordionIcon } from './Accordion.type.js';
	import './Accordion.css';
	import El from '$lib/utils/El.svelte';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	let {
		icon = '',
		open = false,
		join = false,
		title = '',
		name = 'accordion',
		children,
		...others
	}: {
		icon?: AccordionIcon;
		open?: boolean;
		join?: boolean;
		title?: string;
		name?: string;
		children?: any;
	} = $props();
	let componentName = 'accordion';
	let componentClass = $derived({
		icon: icon,
		join: join
	});
	let elClass = $derived(ClassMerge({ name: componentName, componentClass }));
	let titleClass = $derived(ClassMerge({ name: `${componentName}-title` }));
	let contentClass = $derived(ClassMerge({ name: `${componentName}-content` }));
</script>

<El {componentName} {componentClass} class={elClass} {...others}>
	<input type="radio" {name} checked={open} />
	<div class={titleClass}>{title}</div>
	<div class={contentClass}>
		{#if children}
			{@render children()}
		{/if}
	</div>
</El>
