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
				import Drawer from '{$importDocumentSrc}/Drawer.svelte';
				let open = false;
				function openDrawer() {'{'}
					open = true;
				{'}'};
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="Button" one_line props={['on:click={openDrawer}']}>Open Drawer</TagCode>
		<TagCode name="Drawer" props={['bind:open']}>
			<TagCode name="div">content of inside Drawer</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Button on:click={openDrawer}>Open Drawer</Button>
		<Drawer bind:open>
			<div>content of inside Drawer</div>
		</Drawer>
	</div>
</SampleWrapper>
