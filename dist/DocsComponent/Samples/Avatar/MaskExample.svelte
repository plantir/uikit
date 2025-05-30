<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Avatar, Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let masks: any = [
		'squircle',
		'decagon',
		'diamond',
		'heart',
		'hexagon',
		'hexagon-2',
		'circle',
		'parallelogram',
		'parallelogram-2',
		'parallelogram-3',
		'parallelogram-4',
		'pentagon',
		'square',
		'star',
		'star-2',
		'triangle',
		'triangle-2',
		'triangle-3',
		'triangle-4'
	];
	let value: any;
	let checked = true;
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Avatar from '{$importDocumentSrc}/Avatar.svelte';
		</ScriptCode>
	</pre>
	<div slot="html">
		<TagCode name="div" props={['class="flex gap-4 flex-wrap"']}>
			{#each masks as mask}
				<TagCode name="div">
					<TagCode name="div" one_line>{mask}</TagCode>
					<TagCode name="Avatar" props={[`mask="${mask}"`]}>
						<TagCode name="img" props={['src="your image source"']} close_self></TagCode>
					</TagCode>
				</TagCode>
			{/each}
		</TagCode>
	</div>
	<div class="flex gap-4 flex-wrap" slot="preview">
		{#each masks as mask}
			<div>
				<div>{mask}</div>
				<Avatar {mask}>
					<img src="/swiper-example-01.jpg" alt="" />
				</Avatar>
			</div>
		{/each}
	</div>
</SampleWrapper>
<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript"></ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte"></ShowCode>
	</TabItem>
	<TabItem title="Preview" value="Preview">
		<SimpleCode></SimpleCode>
	</TabItem>
</Tabs>
