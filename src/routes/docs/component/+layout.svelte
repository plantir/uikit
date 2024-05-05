<script lang="ts">
	import type { accordionItem } from '../../../type/index.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Accordion from '$lib/DocsComponent/Accordion.svelte';
	let componentItems: accordionItem[] = [
		{
			title: 'Avatar',
			value: 'component/avatar'
		},
		{
			title: 'Badge',
			value: 'component/badge'
		},
		{
			title: 'Button',
			value: 'component/button'
		},
		{
			title: 'Checkbox',
			value: 'component/checkbox'
		},
		{
			title: 'Collapse',
			value: 'component/collapse'
		},
		// {
		// 	title: 'datepicker',
		// 	value: 'component/datepicker'
		// },
		{
			title: 'Dialog',
			value: 'component/dialog'
		},
		{
			title: 'Divider',
			value: 'component/divider'
		},
		{
			title: 'Drawer',
			value: 'component/drawer'
		},
		{
			title: 'Loading',
			value: 'component/loading'
		},
		{
			title: 'Pagination',
			value: 'component/pagination'
		},
		{
			title: 'Radio',
			value: 'component/radio'
		},
		{
			title: 'Range',
			value: 'component/range'
		},
		{
			title: 'Select',
			value: 'component/select'
		},
		{
			title: 'Steps',
			value: 'component/steps'
		},
		{
			title: 'Swiper',
			value: 'component/swiper'
		},
		{
			title: 'Switch',
			value: 'component/switch'
		},
		{
			title: 'Table',
			value: 'component/table'
		},
		{
			title: 'Tabs',
			value: 'component/tabs'
		},
		{
			title: 'Textarea',
			value: 'component/textarea'
		},
		{
			title: 'Text field',
			value: 'component/textfield'
		}
	];
	function gotoLink(event: any) {
		goto(`/docs/${event.detail}`);
	}
	let headers: any = [];
	onMount(() => {
		let tags: any = document.getElementsByClassName('title-document');
		let array = [];
		for (let index = 0; index < tags.length; index++) {
			const element = tags[index];
			array.push({
				id: element.id,
				text: element.innerHTML
			});
		}
		headers = array;
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
