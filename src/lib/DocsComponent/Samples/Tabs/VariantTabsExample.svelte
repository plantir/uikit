<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>
<SampleWrapper>
	<div slot="javascript">
		<pre>
            <ScriptCode>
                import Tabs from '{$importDocumentSrc}/Tabs.svelte';
                import TabItem from '{$importDocumentSrc}/TabItem.svelte';
            </ScriptCode>
        </pre>
    </div>
    <div slot="html">
        <TagCode name="Tabs" props={['selected="part1"', 'variant="box"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="box"']}>content in part 1</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="box"']}>content in part 2</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'variant="lift"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="lift"']}>
				content in part 1
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="lift"']}>
				content in part 2
			</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'variant="border"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="border"']}>
				content in part 1
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="border"']}>
				content in part 2
			</TagCode>
		</TagCode>
    </div>
    <div slot="preview">
		<div class="flex flex-wrap gap-4">
			<Tabs selected="part1" variant="box">
				<TabItem value="part1" title="box">content in part 1</TabItem>
				<TabItem value="part2" title="box">content in part 2</TabItem>
			</Tabs>
			<Tabs selected="part1" variant="lift">
				<TabItem value="part1" title="lift">content in part 1</TabItem>
				<TabItem value="part2" title="lift">content in part 2</TabItem>
			</Tabs>
			<Tabs selected="part1" variant="border">
				<TabItem value="part1" title="border">content in part 1</TabItem>
				<TabItem value="part2" title="border">content in part 2</TabItem>
			</Tabs>
		</div>
    </div>
</SampleWrapper>
