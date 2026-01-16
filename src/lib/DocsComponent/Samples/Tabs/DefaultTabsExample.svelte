<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Tabs</span> from '{$importDocumentSrc}/Tabs.svelte';
			import <span class="text-green-600">TabItem</span> from '{$importDocumentSrc}/TabItem.svelte';
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="Tabs" props={['selected="part1"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="Part1"']}>
				<TagCode name="div" props={['class="p-10"']}>content in part 1</TagCode>
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="Part2"']}>
				<TagCode name="div" props={['class="p-10"']}>content in part 2</TagCode>
			</TagCode>
			<TagCode name="TabItem" props={['value="part3"', 'title="Part3"']}>
				<TagCode name="div" props={['class="p-10"']}>content in part 3</TagCode>
			</TagCode>
			<TagCode name="TabItem" props={['value="part4"', 'title="Part4"']}>
				<TagCode name="div" props={['class="p-10"']}>content in part 4</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Tabs selected="part1">
			<TabItem value="part1" title="Part1">
				<div class="p-10">content in part 1</div>
			</TabItem>
			<TabItem value="part2" title="Part2">
				<div class="p-10">content in part 2</div>
			</TabItem>
			<TabItem value="part3" title="Part3">
				<div class="p-10">content in part 3</div>
			</TabItem>
			<TabItem value="part4" title="Part4">
				<div class="p-10">content in part 4</div>
			</TabItem>
		</Tabs>
	</div>
</SampleWrapper>
