<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '$lib/components/Status/Status.svelte';
	import Menu from '$lib/components/Menu/Menu.svelte';
	import MenuItem from '$lib/components/Menu/MenuItem.svelte';
	import type { GlobalSize } from '$lib/utils/El.types.js';
	let sizes: GlobalSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Menu</span> from '{$importDocumentSrc}/Menu.svelte';
			import <span class="text-green-600">MenuItem</span> from '{$importDocumentSrc}/MenuItem.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each sizes as size}
			<TagCode name="Menu" props={['class="bg-base-200 rounded-box"', `size="${size}"`]}>
				<TagCode name="MenuItem">
					<TagCode name="a">item1</TagCode>
				</TagCode>
				<TagCode name="MenuItem">
					<TagCode name="a">item2</TagCode>
				</TagCode>
				<TagCode name="MenuItem">
					<TagCode name="a">item3</TagCode>
				</TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col gap-4 items-center justify-center">
			{#each sizes as size}
				<Menu class="bg-base-200 rounded-box" {size}>
					<MenuItem><a href="">item1</a></MenuItem>
					<MenuItem><a href="">item2</a></MenuItem>
					<MenuItem><a href="">item3</a></MenuItem>
				</Menu>
			{/each}
		</div>
	</div>
</SampleWrapper>
