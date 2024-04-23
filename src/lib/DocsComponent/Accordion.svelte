<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { accordionItem } from '../../../type/index.js';
	import { createEventDispatcher } from 'svelte';
	export let items: accordionItem[] = [];
	export let title: string = '';
	export let open = false;
	const dispatch = createEventDispatcher();
	function event(value: string) {
		dispatch('clickItem', value);
	}
	function toggleOpen() {
		open = !open;
	}
</script>

<div>
	<button class="flex items-center justify-between pb-3 w-full" on:click={toggleOpen}>
		<slot name="title">
			<span class="text-2xl font-semibold">
				{title}
			</span>
		</slot>
		<div class="transition" class:rotate-180={open}>SVG</div>
	</button>
	{#if open}
		<div class="flex flex-col gap-2" transition:slide>
			{#each items as item}
				<slot name="item" {item}>
					<button on:click={() => event(item.value)}>
						{item.title}
					</button>
				</slot>
			{/each}
		</div>
	{/if}
</div>
