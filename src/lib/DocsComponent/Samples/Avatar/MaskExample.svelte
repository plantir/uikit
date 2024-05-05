<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Avatar, Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	let activeTab = 'javascript';
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

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Avatar from '{$importDocumentSrc}/Avatar.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
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
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div class="flex gap-4 flex-wrap">
				{#each masks as mask}
					<div>
						<div>{mask}</div>
						<Avatar {mask}>
							<img src="/swiper-example-01.jpg" alt="" />
						</Avatar>
					</div>
				{/each}
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
