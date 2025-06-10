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
		<div class="flex flex-col gap-2 ml-2 border-l border-base-content/10 pl-4" transition:slide>
			{#each items as item}
				<div>
					<div class="flex items-center gap-2">
						{@html item.icon}
						<span class="text-base-content/40 text-sm">
							{item.title}
						</span>
					</div>
					{#each item.items as menuItem}
						<div class="pl-4 border-l border-base-content/10 ml-2">
							<slot name="item" item={menuItem}>
								<button on:click={() => event(menuItem.value)}>
									{menuItem.title}
								</button>
							</slot>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	
</style>
