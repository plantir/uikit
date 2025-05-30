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
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value: any;
	let checked = true;
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Checkbox from '{$importDocumentSrc}/Checkbox.svelte';
			let checked=true;
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="Checkbox" props={['label="default checkbox"']} close_self></TagCode>
		<TagCode name="Checkbox" props={['label="checked state"', 'bind:value={checked}']} close_self
		></TagCode>
		<TagCode name="Checkbox" props={['label="indeterminate"', 'indeterminate']} close_self
		></TagCode>
	</div>
	<div slot="preview">
		<Checkbox label="default checkbox" />
		<Checkbox label="checked state" bind:value={checked} />
		<Checkbox label="indeterminate" indeterminate />
	</div>
</SampleWrapper>