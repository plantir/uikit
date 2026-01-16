<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { GlobalSizesText, importDocumentSrc } from '$lib/store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalSize } from '$lib/utils/El.types.js';
	let sizes: GlobalSize[] = GlobalSizesText;
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Tabs</span> from '{$importDocumentSrc}/Tabs.svelte';
			import <span class="text-green-600">TabItem</span> from '{$importDocumentSrc}/TabItem.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each sizes as size}
			<TagCode name="Tabs" props={['selected="part1"', `size="${size}"`]}>
				<TagCode name="TabItem" props={['value="part1"', `title="${size}"`]}
					>content in part 1</TagCode
				>
				<TagCode name="TabItem" props={['value="part2"', `title="${size}"`]}
					>content in part 2</TagCode
				>
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4 flex-col">
			{#each sizes as size}
				<Tabs selected="part1" {size}>
					<TabItem value="part1" title={size}>content in part 1</TabItem>
					<TabItem value="part2" title={size}>content in part 2</TabItem>
				</Tabs>
			{/each}
		</div>
	</div>
</SampleWrapper>
