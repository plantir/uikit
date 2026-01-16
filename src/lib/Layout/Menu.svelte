<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Accordion from '$lib/DocsComponent/MenuAccordion.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import { components } from '$lib/store/index.js';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	function gotoLink(event: any) {
		dispatch('close');
	}
</script>

<div class="p-4">
	<div class="block md:hidden max-w-sm w-full mb-4">
		<TextField placeholder="Search..." class="w-full"></TextField>
	</div>
	<Accordion on:clickItem={gotoLink} open={true} items={$components} title="Components">
		<div slot="item" let:item>
			<a
				href="/docs/component/{item.value}"
				on:click={gotoLink}
				class={$page.url.pathname.split('/component/')[1]?.toLowerCase() == item.value.toLowerCase()
					? 'text-error'
					: ''}
			>
				{item.title}
			</a>
		</div>
	</Accordion>
	<div
		class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"
	></div>
</div>
