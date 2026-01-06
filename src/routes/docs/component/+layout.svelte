<script lang="ts">
	import type { accordionItem } from '../../../type/index.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Accordion from '$lib/DocsComponent/MenuAccordion.svelte';
	import { page } from '$app/stores';
	import { components } from '$lib/store/index.js';
	let scrollY: any = $state();
	let sections: any = $state([]);
	function gotoLink(event: any) {
		goto(`/docs/${event.detail}`);
	}
	onMount(() => {});
	const checkHeaders = () => {
		sections = document.getElementsByClassName('title-document');
	};
	let headers = $derived.by(() => {
		let array: any = [];
		for (let index = 0; index < sections.length; index++) {
			const element = document.getElementById(sections[index].id);
			if (!element) return;
			const rect = element.getBoundingClientRect();
			let top = element.offsetTop;
			let new_element = element;
			while (new_element.parentElement) {
				top += new_element.parentElement.offsetTop;
				new_element = new_element.parentElement;
			}
			array.push({
				id: sections[index].id,
				text: sections[index].innerHTML,
				active: scrollY >= top - 100 && scrollY < top + 100
			});
		}
		return array;
	});

	$effect(() => {
		$page;
		checkHeaders();
	});
	// $effect(() => {
	// 	if (!scrollY) return;
	// 	clearTimeout(timeout);
	// 	timeout = setTimeout(() => {
	// 		updateActiveHeaders();
	// 	}, 500);
	// });
	// const updateActiveHeaders = () => {
	// 	headers = headers.map((header) => {
	// 		const element = document.getElementById(header.id);
	// 		if (!element) return header;

	// 		const rect = element.getBoundingClientRect();

	// 		return {
	// 			...header,
	// 			active: rect.top > -20 && rect.top < 250
	// 		};
	// 	});
	// };
	const changePosition = (header: any) => {
		const object = { ...header };
		object.active = true;
		header = object;
	};
</script>

<svelte:window bind:scrollY />
<div class="flex">
	<div
		class="hidden md:block basis-72 component-menu-height px-8 overflow-y-auto border-r border-base-200 sticky top-16"
	>
		<Accordion on:clickItem={gotoLink} open={true} items={$components} title="Components">
			<div
				slot="item"
				class="menu-item {$page.url.pathname.split('/component/')[1].toLowerCase() ==
				item.value.toLowerCase()
					? 'menu-active'
					: ''}"
				let:item
			>
				<a href="/docs/component/{item.value}">
					{item.title}
				</a>
			</div>
		</Accordion>
		<div
			class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"
		></div>
	</div>
	<div class="relative px-5 md:px-[60px] min-w-0 lg:px-[120px] flex-1">
		<slot />
	</div>
	<div class="hidden md:block basis-72 h-max overflow-y-auto sticky top-16 pt-4">
		<div class="text-xl font-semibold mb-4">On this page</div>
		<div class="flex flex-col gap-2">
			{#each headers as header}
				<a
					href="#{header.id}"
					on:click={() => changePosition(header)}
					class="block hover:text-error"
					class:text-error={header.active}
					>{header.text}
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	@reference '../../../lib/css/app.css';

	.component-menu-height {
		height: calc(100vh - 64px);
	}
	.menu-item {
		@apply px-2 py-1 rounded-sm;
		--menu-active-fg: var(--color-neutral-content);
		--menu-active-bg: var(--color-neutral);
	}
	.menu-item a {
		@apply w-full block;
	}
	.menu-item:hover {
		@apply bg-neutral/10;
	}
	.menu-item.menu-active {
		box-shadow: 0 2px calc(var(--depth) * 3px) -2px var(--menu-active-bg);
		--tw-outline-style: none;
		color: var(--menu-active-fg);
		background-color: var(--menu-active-bg);
		background-size: auto, calc(var(--noise) * 100%);
		background-image: none, var(--fx-noise);
		outline-style: none;
	}
</style>
