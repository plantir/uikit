<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Dialog, Drawer, Range, Switch, Table } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let value = '';
	let open = false;
	function openDialog() {
		open = true;
	}
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Dialog from '{$importDocumentSrc}/Dialog.svelte';
			let open = false;
			function openDialog() {'{'}
				open = true;
			{'}'};
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="Button" one_line props={['on:click={openDialog}']}>Open Dialog</TagCode>
		<TagCode name="Dialog" props={['bind:open']}>
			<TagCode name="div">content of inside Dialog</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Button on:click={openDialog}>Open Dialog</Button>
		<Dialog bind:open>
			<div>
				<div>content of inside Dialog</div>
			</div>
		</Dialog>
	</div>
</SampleWrapper>
