<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Accordion from '$lib/DocsComponent/Accordion.svelte';
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
	slm
	<Accordion on:clickItem={gotoLink} open={true} items={$components} title="Components">
		<div slot="item" let:item>
			<a
				href="/docs/{item.value}"
                on:click={gotoLink}
				class={$page.url.pathname.includes(item.value) ? 'text-error' : ''}
			>
				{item.title}
			</a>
		</div>
	</Accordion>
</div>
