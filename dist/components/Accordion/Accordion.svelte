<script lang="ts">
	import type { Accordion, AccordionIcon } from './Accordion.type.js';
	import './Accordion.css';
	import El from '../../utils/El.svelte';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	type $$Props = Accordion;
	let componentName = 'accordion';

	export let icon: AccordionIcon = '';
	export let open = false;
	export let join = false;
	export let title = '';
	export let name = `accordion`;
	$: componentClass = {
		icon: icon,
		join: join
	};
	$: elClass = ClassMerge({ name: componentName, componentClass });
	$: titleClass = ClassMerge({ name: `${componentName}-title` });
	$: contentClass = ClassMerge({ name: `${componentName}-content` });
</script>

<El {componentName} {componentClass} class={elClass} {...$$restProps}>
	<input type="radio" {name} checked={open} />
	<div class={titleClass}>{title}</div>
	<div class={contentClass}>
		<slot></slot>
	</div>
</El>
