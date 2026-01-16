<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Checkbox, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CheckboxGroup from '$lib/components/CheckboxGroup/CheckboxGroup.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import ArrayCode from '$lib/DocsComponent/ComponentCode/ArrayCode.svelte';
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
