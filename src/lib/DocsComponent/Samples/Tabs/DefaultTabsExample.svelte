<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	let activeTab = 'javascript';
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Tabs from '{$importDocumentSrc}/Tabs.svelte';
				import TabItem from '{$importDocumentSrc}/TabItem.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="Tabs" props={['selected="part1"']}
				><br />
				<TagCode name="TabItem" props={['value="part1"', 'title="Part1"']}>
					<br />
					content in part 1
					<br />
				</TagCode><br />
				<TagCode name="TabItem" props={['value="part2"', 'title="Part2"']}>
					<br />
					content in part 2
					<br />
				</TagCode><br />
				<TagCode name="TabItem" props={['value="part3"', 'title="Part3"']}>
					<br />
					content in part 3
					<br />
				</TagCode><br />
				<TagCode name="TabItem" props={['value="part4"']}>
					<br />
					<TagCode name="span" props={['slot="title']}>Part4</TagCode>
					<br />
					content in part 4
					<br />
				</TagCode><br />
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<Tabs selected="part1">
				<TabItem value="part1" title="Part1">content in part 1</TabItem>
				<TabItem value="part2" title="Part2">content in part 2</TabItem>
				<TabItem value="part3" title="Part3">content in part 3</TabItem>
				<TabItem value="part4">
					<span slot="title">Part4</span>
					content in part 4</TabItem
				>
			</Tabs>
		</SimpleCode>
	</TabItem>
</Tabs>
