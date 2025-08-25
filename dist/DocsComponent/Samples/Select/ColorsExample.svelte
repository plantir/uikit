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
	let colors: any = [
		'primary',
		'secondary',
		'accent',
		'success',
		'warning',
		'info',
		'error',
		'neutral'
	];
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
		<TagCode name="div" props={['class="flex flex-col flex-wrap gap-4"']}>
			{#each colors as color}
				<TagCode
					close_self
					name="Select"
					props={[`label="${color} Select"`, '{items}', `color="${color}"`, 'class="w-xs"']}
				/>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-col flex-wrap gap-4">
			{#each colors as color}
				<Select label="{color} Select" {items} {color} class="w-xs" />
			{/each}
		</div>
	</div>
</SampleWrapper>
