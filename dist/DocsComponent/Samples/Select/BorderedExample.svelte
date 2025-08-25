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
	let items = ['item-1', 'item-2', 'item-3'];
	let value = '';
	let value2 = '';
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
			props={['label="Default Select"', '{items}', 'bind:value', 'bordered={false}']}
		/>
		<TagCode one_line name="span" props={['class="pl-4"']}>value : {'{'}value{'}'}</TagCode>
		<TagCode
			close_self
			name="Select"
			props={['label="Default Select"', '{items}', 'bind:value={value2}', 'bordered']}
		/>
		<TagCode one_line name="span" props={['class="pl-4"']}>value : {'{'}value{'}'}</TagCode>
	</div>
	<div slot="preview">
		<Select bind:value label="Default Select" {items} bordered={false} />
		<span class="pl-4">
			value : {value}
		</span>
		<Select bind:value={value2} label="Default Select" {items} bordered />
		<span class="pl-4">
			value : {value2}
		</span>
	</div>
</SampleWrapper>
