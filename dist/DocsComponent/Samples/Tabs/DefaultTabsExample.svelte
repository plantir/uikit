<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
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
		<TagCode name="Tabs" props={['selected="part1"']}>
			<TagCode name="TabItem" props={['value="part1"', 'title="Part1"']}>content in part 1</TagCode>
			<TagCode name="TabItem" props={['value="part2"', 'title="Part2"']}>content in part 2</TagCode>
			<TagCode name="TabItem" props={['value="part3"', 'title="Part3"']}>content in part 3</TagCode>
			<TagCode name="TabItem" props={['value="part4"']}>
				<TagCode name="span" props={['slot="title']}>Part4</TagCode>

				content in part 4
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Tabs selected="part1">
			<TabItem value="part1" title="Part1">content in part 1</TabItem>
			<TabItem value="part2" title="Part2">content in part 2</TabItem>
			<TabItem value="part3" title="Part3">content in part 3</TabItem>
			<TabItem value="part4">
				<span slot="title">Part4</span>
				content in part 4</TabItem
			>
		</Tabs>
	</div>
</SampleWrapper>
