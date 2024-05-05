<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Drawer, Range, Switch, Table } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let open = false;
	function openDrawer() {
		open = true;
	}
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
		<TagCode name="Drawer" props={['bind:open', 'backdrop={false}']}>
			<TagCode name="div">content of inside Drawer with no backdrop</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Button on:click={openDrawer}>Open Drawer</Button>
		<Drawer bind:open backdrop={false}>
			<div>content of inside Drawer with no backdrop</div>
		</Drawer>
	</div>
</SampleWrapper>
