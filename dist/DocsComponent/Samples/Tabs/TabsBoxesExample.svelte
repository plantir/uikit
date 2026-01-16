<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { GlobalColorsText, importDocumentSrc } from '../../../store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TextField from '../../../components/TextField/TextField.svelte';
	let activeTab = 'Preview';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalColor } from '../../../utils/El.types.js';
	let colors = GlobalColorsText;
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
		<TagCode name="Tabs" props={['selected="part1"', 'variant="box"']}>
			<TagCode name="TabItem" props={['value="part1"', `title="part1"`]}>content in part 1</TagCode>
			<TagCode name="TabItem" props={['value="part2"', `title="part2"`]}>content in part 2</TagCode>
		</TagCode>
		{#each colors as color}
			<TagCode name="Tabs" props={['selected="part1"', `color="${color}`, 'variant="box"']}>
				<TagCode name="TabItem" props={['value="part1"', `title="${color}"`]}>
					content in part 1
				</TagCode>
				<TagCode name="TabItem" props={['value="part2"', `title="${color}"`]}>
					content in part 2
				</TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<Tabs selected="part1" variant="box">
				<TabItem value="part1" title={'part1'}>content in part 1</TabItem>
				<TabItem value="part2" title={'part2'}>content in part 2</TabItem>
			</Tabs>
			{#each colors as color}
				<Tabs selected="part1" {color} variant="box">
					<TabItem value="part1" title={color}>content in part 1</TabItem>
					<TabItem value="part2" title={color}>content in part 2</TabItem>
				</Tabs>
			{/each}
		</div>
	</div>
</SampleWrapper>
