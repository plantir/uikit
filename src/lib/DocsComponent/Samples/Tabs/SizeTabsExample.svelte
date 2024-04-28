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
			<TagCode name="Tabs" props={['selected="part1"', 'size="xs"']}
				><br />
				<TagCode name="TabItem" props={['value="part1"', 'title="xs"']}>
					<br />
					content in part 1
					<br />
				</TagCode><br />
				<TagCode name="TabItem" props={['value="part2"', 'title="xs"']}>
					<br />
					content in part 2
					<br />
				</TagCode><br />
			</TagCode>
			<TagCode name="Tabs" props={['selected="part1"', 'size="sm"']}
				><br />
				<TagCode name="TabItem" props={['value="part1"', 'title="sm"']}>
					<br />
					content in part 1
					<br />
				</TagCode><br />
				<TagCode name="TabItem" props={['value="part2"', 'title="sm"']}>
					<br />
					content in part 2
					<br />
				</TagCode><br />
			</TagCode>
			<TagCode name="Tabs" props={['selected="part1"', 'size="md"']}
				><br />
				<TagCode name="TabItem" props={['value="part1"', 'title="md"']}>
					<br />
					content in part 1
					<br />
				</TagCode><br />
				<TagCode name="TabItem" props={['value="part2"', 'title="md"']}>
					<br />
					content in part 2
					<br />
				</TagCode><br />
			</TagCode>
			<TagCode name="Tabs" props={['selected="part1"', 'size="lg"']}
				><br />
				<TagCode name="TabItem" props={['value="part1"', 'title="lg"']}>
					<br />
					content in part 1
					<br />
				</TagCode><br />
				<TagCode name="TabItem" props={['value="part2"', 'title="lg"']}>
					<br />
					content in part 2
					<br />
				</TagCode><br />
			</TagCode>
			<TagCode name="Tabs" props={['selected="part1"']}
				><br />
				<TagCode name="TabItem" props={['value="part1"', 'title="default"']}>
					<br />
					content in part 1
					<br />
				</TagCode><br />
				<TagCode name="TabItem" props={['value="part2"', 'title="default"']}>
					<br />
					content in part 2
					<br />
				</TagCode><br />
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div class="flex flex-wrap gap-4">
				<Tabs selected="part1" size="xs">
					<TabItem value="part1" title="xs">content in part 1</TabItem>
					<TabItem value="part2" title="xs">content in part 2</TabItem>
				</Tabs>
				<Tabs selected="part1" size="sm">
					<TabItem value="part1" title="sm">content in part 1</TabItem>
					<TabItem value="part2" title="sm">content in part 2</TabItem>
				</Tabs>
				<Tabs selected="part1" size="md">
					<TabItem value="part1" title="md">content in part 1</TabItem>
					<TabItem value="part2" title="md">content in part 2</TabItem>
				</Tabs>
				<Tabs selected="part1" size="lg">
					<TabItem value="part1" title="lg">content in part 1</TabItem>
					<TabItem value="part2" title="lg">content in part 2</TabItem>
				</Tabs>
				<Tabs selected="part1">
					<TabItem value="part1" title="default">content in part 1</TabItem>
					<TabItem value="part2" title="default">content in part 2</TabItem>
				</Tabs>
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
