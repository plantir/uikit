<script lang="ts">
	import type { accordionItem } from '../../../type/index.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Accordion from '$lib/DocsComponent/MenuAccordion.svelte';
	import { page } from '$app/stores';
	import { components } from '$lib/store/index.js';
	let scrollY: any;
	function gotoLink(event: any) {
		goto(`/docs/${event.detail}`);
	}
	// $: scrollY = scrollY;
	let headers: any = [];
	onMount(() => {
		let tags: any = document.getElementsByClassName('title-document');
		let array = [];
		for (let index = 0; index < tags.length; index++) {
			const element = tags[index];
			array.push({
				id: element.id,
				text: element.innerHTML,
				active: false
			});
		}
		headers = array;
	});
	function handleLink(e: any) {
		const link = e.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		console.log(anchorId);

		const anchor: any = document.getElementById(anchorId);
		console.log(anchor.getBoundingClientRect().y);
		window.scrollTo({
			top: anchor.getBoundingClientRect().y,
			behavior: 'smooth'
		});
	}
	$: if (scrollY) {
		checkActiveHeader();
	}
	function checkActiveHeader() {
		let array: any = [...headers];
		array.forEach((header: any) => {
			const element: any = document.getElementById(header.id);
			if (element) {
				const rect = element.getBoundingClientRect();
				if (rect.top > -20 && rect.top < 250) {
					header.active = true;
				} else {
					header.active = false;
				}
			}
		});
		headers = array;
	}
	function changePosition(header: any) {
		const object = { ...header };
		object.active = true;
		header = object;
	}
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
