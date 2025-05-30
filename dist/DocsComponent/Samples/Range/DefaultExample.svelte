<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Drawer, Range, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let value = '';
	let open = false;
	function openDrawer() {
		open = true;
	}
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Range from '{$importDocumentSrc}/Range.svelte';
				let value = '';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="Range" close_self props={['label="Default Range"', 'bind:value']}></TagCode>
		<TagCode name="div">
			number is : {'{'}value{'}'}
		</TagCode>
	</div>
	<div slot="preview">
		<Button on:click={openDrawer}>Open Drawer</Button>
		<Drawer bind:open />
	</div>
</SampleWrapper>
