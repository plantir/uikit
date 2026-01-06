<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { Step, StepColor, StepSize, StepVariant, StepItem } from './Steps.type.js';
	import './Steps.css';

	let {
		size,
		variant = 'border',
		vertical = false,
		horizontal = true,
		color,
		selected = $bindable(undefined),
		items = [],
		...others
	}: Step = $props();

	let componentName = 'steps';

	const onclick = (item: StepItem) => {
		selected = item.value;
	};

	let stepItems = $derived(
		items.map((item) => {
			return {
				title: item.title || item,
				value: item.value || item
			};
		})
	);

	const isActive = (item: StepItem) => {
		let index = stepItems.findIndex((step) => step.value === item.value);
		let selected_index = stepItems.findIndex((step) => step.value === selected);
		return selected_index >= index;
	};

	let componentClass = $derived({
		vertical,
		horizontal: !vertical && horizontal,
		bordered: variant === 'border',
		boxed: variant === 'box',
		lifted: variant === 'lift',
		xs: size === 'xs',
		sm: size === 'sm',
		md: size === 'md',
		lg: size === 'lg',
		primary: color === 'primary',
		secondary: color === 'secondary',
		accent: color === 'accent',
		success: color === 'success',
		info: color === 'info',
		error: color === 'error',
		warning: color === 'warning',
		natural: color === 'natural'
	});
</script>

<El {componentClass} {componentName} {...others}>
	{#each stepItems as item, _}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li onclick={() => onclick(item)} class="ui-step" class:active={isActive(item)}>
			{item.title}
		</li>
	{/each}
</El>
