<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value: any;
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Radio</span> from '{$importDocumentSrc}/Radio.svelte';
			import <span class="text-green-600">RadioGroup</span> from '{$importDocumentSrc}/RadioGroup.svelte';
			<LetCode name="value" value=""></LetCode>
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="RadioGroup" props={['bind:value', 'join']}>
			<TagCode close_self name="Radio" props={['value="male"', 'label="male"']}></TagCode>
			<TagCode close_self name="Radio" props={['value="female"', 'label="female"']}></TagCode>
			<TagCode close_self name="Radio" props={['value="other"', 'label="other"']}></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<RadioGroup bind:value join>
			<Radio value="male" label="male"></Radio>
			<Radio value="female" label="female"></Radio>
			<Radio value="other" label="other"></Radio>
		</RadioGroup>
	</div>
</SampleWrapper>
