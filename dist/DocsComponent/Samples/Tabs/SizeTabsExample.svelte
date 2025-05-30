<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TextField from '../../../components/TextField/TextField.svelte';
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
		<TagCode name="Tabs" props={['selected="part1"', 'size="xs"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="xs"']}>content in part 1</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="xs"']}>content in part 2</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'size="sm"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="sm"']}>content in part 1</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="sm"']}>content in part 2</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'size="md"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="md"']}>content in part 1</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="md"']}>content in part 2</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"', 'size="lg"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="lg"']}>content in part 1</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="lg"']}>content in part 2</TagCode>
		</TagCode>
		<TagCode name="Tabs" props={['selected="part1"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="default"']}>
				content in part 1
			</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="default"']}>
				content in part 2
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
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
	</div>
</SampleWrapper>