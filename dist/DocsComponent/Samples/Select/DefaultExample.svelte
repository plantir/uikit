<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Select, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let items = [
		{
			title: 'item 1 text',
			value: 'value_1'
		},
		{
			title: 'item 2 text',
			value: 'value_2'
		},
		{
			title: 'item 3 text',
			value: 'value_3'
		}
	];
	let value = '';
	import SampleWrapper from '../SampleWrapper.svelte';
	import ArrayCode from '../../ComponentCode/ArrayCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Select</span> from '{$importDocumentSrc}/Select.svelte';
			<br />
			<ArrayCode name="items" {items} />
			<br />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode
			close_self
			name="Select"
			props={['label="Default Select"', '{items}', 'class="w-xs"']}
		/>
	</div>
	<div slot="preview">
		<Select bind:value label="Default Select" class="w-xs" {items} />
	</div>
</SampleWrapper>
