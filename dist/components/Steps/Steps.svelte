<script lang="ts">
	import El from '../../utils/El.svelte';
	import type { Step, StepColor, StepSize, StepVariant, StepItem } from './Steps.type.js';
	type $$Props = Step;
	let componentName = 'steps';
	export let size: StepSize = undefined;
	export let variant: StepVariant = 'border';
	export let vertical: boolean = false;
	export let horizontal: boolean = !vertical && true;
	export let color: StepColor = undefined;
	export let selected: string | undefined = undefined;
	export let items: any[] = [];
	const onclick = (item: StepItem) => {
		selected = item.value;
	};
	const isActive = (item: StepItem) => {
		let index = stepItems.findIndex((step) => step.value == item.value);
		let selected_index = stepItems.findIndex((step) => step.value == selected);
		return selected_index >= index;
	};
	$: componentClass = {
		vertical,
		horizontal,
		bordered: variant == 'border',
		boxed: variant == 'box',
		lifted: variant == 'lift',
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		natural: color == 'natural'
	};
	$: stepItems = items.map((item) => {
		return {
			title: item.title || item,
			value: item.value || item
		};
	});
</script>

<El {componentClass} {componentName} {...$$restProps}>
	{#each stepItems as item, _}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li on:click={() => onclick(item)} class="ui-step" class:active={isActive(item)}>
			{item.title}
		</li>
	{/each}
</El>
