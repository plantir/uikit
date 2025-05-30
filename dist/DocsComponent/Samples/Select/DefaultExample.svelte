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
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Select from '{$importDocumentSrc}/Select.svelte';
				let items = ['item-1', 'item-2', 'item-3'];
				let value = '';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode close_self name="Select" props={['label="Default Select"', '{items}', 'bind:value']} />
		<TagCode one_line name="span" props={['class="pl-4"']}>value : {'{'}value{'}'}</TagCode>
	</div>
	<div slot="preview">
		<Select bind:value label="Default Select" {items} />
		<span class="pl-4">
			value : {value}
		</span>
	</div>
</SampleWrapper>
