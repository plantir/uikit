<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let value: any;
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Radio</span> from '{$importDocumentSrc}/Radio.svelte';
			import <span class="text-green-600">RadioGroup</span> from '{$importDocumentSrc}/RadioGroup.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="RadioGroup" props={['bind:value']}>
			<TagCode close_self name="Radio" props={['value="male"', 'label="male"']}></TagCode>
			<TagCode close_self name="Radio" props={['value="female"', 'label="female"', 'disabled']}
			></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<RadioGroup bind:value>
			<Radio value="male" label="male"></Radio>
			<Radio disabled value="female" label="female"></Radio>
		</RadioGroup>
	</div>
</SampleWrapper>
