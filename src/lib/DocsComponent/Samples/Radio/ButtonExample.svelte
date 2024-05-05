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
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Radio from '{$importDocumentSrc}/Radio.svelte';
				import RadioGroup from '{$importDocumentSrc}/RadioGroup.svelte';
				let value='';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="RadioGroup" props={['bind:value', 'join']}>
			<TagCode close_self name="Radio" props={['value="male"', 'label="male"', 'button']}></TagCode>
			<TagCode close_self name="Radio" props={['value="female"', 'label="female"', 'button']}
			></TagCode>
			<TagCode close_self name="Radio" props={['value="other"', 'label="other"', 'button']}
			></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<RadioGroup bind:value join>
			<Radio button value="male" label="male"></Radio>
			<Radio button value="female" label="female"></Radio>
			<Radio button value="other" label="other"></Radio>
		</RadioGroup>
	</div>
</SampleWrapper>
