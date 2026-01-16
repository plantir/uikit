<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CheckboxGroup from '../../../components/CheckboxGroup/CheckboxGroup.svelte';
	import LetCode from '../../ComponentCode/LetCode.svelte';
	import ArrayCode from '../../ComponentCode/ArrayCode.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value: any;
	let checked = 'test';
	let selected: any = $state(['option-2']);
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Checkbox</span> from '{$importDocumentSrc}/Checkbox.svelte';
			import <span class="text-green-600">CheckboxGroup</span> from '{$importDocumentSrc}/CheckboxGroup.svelte';
			<br />
			<ArrayCode name="selected" items={selected} />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="CheckboxGroup" props={['bind:value={selected}']}>
			<TagCode name="Checkbox" props={['label="option 1"', 'value="option-1"']} close_self
			></TagCode>
			<TagCode name="Checkbox" props={['label="option 2"', 'value="option-2"']} close_self
			></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<CheckboxGroup bind:value={selected}>
			<Checkbox label="option 1" value="option-1" />
			<Checkbox label="option 2" value="option-2" />
		</CheckboxGroup>
	</div>
</SampleWrapper>
