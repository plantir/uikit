<script lang="ts">
	import type { accordionItem } from '../../../type/index.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Accordion from '$lib/components/Components/Accordion.svelte';
	let componentItems: accordionItem[] = [
		{
			title: 'Button',
			value: 'component/button'
		},
		{
			title: 'Dialog',
			value: 'component/dialog'
		}
	];
	function gotoLink(event: any) {
		goto(`/docs/${event.detail}`);
	}
	let headers: any = [];
	onMount(() => {
		let tags: any = document.getElementsByClassName('title-document');
		console.log(tags, ' inm tags');

		let array = [];
		for (let index = 0; index < tags.length; index++) {
			const element = tags[index];
			console.log(element, 'inm element');
			array.push({
				id: element.id,
				text: element.innerHTML
			});
		}
		headers = array;
		console.log(headers, 'inm tags');
	});
</script>

<div class="flex">
	<div
		class="basis-72 component-menu-height px-8 overflow-y-auto border-r border-gray-600 sticky top-0"
	>
		<Accordion on:clickItem={gotoLink} open={true} items={componentItems} title="Components">
			<div slot="item" let:item>
				<a href="/docs/{item.value}">
					{item.title}
				</a>
			</div>
		</Accordion>
	</div>
	<div class="relative px-[120px] flex-1">
		<slot />
	</div>
	<div class="basis-72 h-max overflow-y-auto sticky top-4 pt-4">
		<div class="text-xl font-semibold mb-4">On this page</div>
		<div class="flex flex-col gap-2">
			{#each headers as header}
				<a href="#{header.id}" class="block hover:text-red-600">{header.text}</a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.component-menu-height {
		height: calc(100vh - 64px);
	}
</style>
