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
		<div class="transition relative">
			<svg
				width="12px"
				height="12px"
				class=" h-2 w-2 fill-current opacity-60 inline-block absolute top-1/2 -translate-y-1/2 right-0 transition"
				class:rotate-180={open}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2048 2048"
				><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg
			>
		</div>
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
