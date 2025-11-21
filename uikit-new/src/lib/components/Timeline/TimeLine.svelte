<script lang="ts">
	import El from '$lib/utils/El.svelte';
	import type { TimeLine, TimeLineItems } from './TimeLine.type.js';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
	type $$Props = TimeLine;
	let componentName = 'timeline';
	export let value: any = '';
	export let items: TimeLineItems[] = [];
	export let color: GlobalColor = undefined;
	export let icon: any = true;
	export let clickable: boolean = false;
	export let reverse: boolean = false;
	export let vertical: boolean = false;
	$: componentClass = {
		color: color,
		reverse,
		vertical
	};
	const activeValue = (val: any) => {
		if (clickable) {
			value = val;
		}
	};
	let valueIndex = 0;
	$: {
		valueIndex = items.findIndex((x) => x.value == value);
	}
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...$$restProps}>
	{#each items as item, index}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<li class={valueIndex >= index ? 'active' : ''} onclick={() => activeValue(item.value)}>
			{#if index !== 0}
				<hr />
			{/if}
			{#if item.title}
				<div class="timeline-first">{item.title}</div>
			{/if}
			{#if icon}
				<div class="timeline-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			{/if}
			{#if item.text}
				<div class="timeline-end">{item.text}</div>
			{/if}
			{#if index !== items.length - 1}
				<hr class={valueIndex == index ? 'not-active' : ''} />
			{/if}
		</li>
	{/each}
</El>
<!-- </span> -->
