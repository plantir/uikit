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
	let activeTab = 'javascript';
	let form: any = {};
	let value = '';
	let leftDrawer = false;
	let rightDrawer = false;
	let topDrawer = false;
	let bottomDrawer = false;
	function openLeft() {
		leftDrawer = true;
	}
	function openRightt() {
		rightDrawer = true;
	}
	function openTop() {
		topDrawer = true;
	}
	function openBottom() {
		bottomDrawer = true;
	}
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Drawer from '{$importDocumentSrc}/Drawer.svelte';
				let leftDrawer = false;
				let rightDrawer = false;
				let topDrawer = false;
				let bottomDrawer = false;
				function openLeft() {'{'}
					leftDrawer = true;
				{'}'};
				function openRightt() {'{'}
					rightDrawer = true;
				{'}'};
				function openTop() {'{'}
					topDrawer = true;
				{'}'};
				function openBottom() {'{'}
					bottomDrawer = true;
				{'}'};
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="Button" one_line props={['on:click={openDrawer}']}>Open Drawer</TagCode>
			<TagCode name="Drawer" props={['bind:open']}>
				<TagCode name="div">content of inside Drawer</TagCode>
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<Button on:click={openLeft}>Open left Drawer</Button>
			<Button on:click={openRightt}>Open right Drawer</Button>
			<Button on:click={openTop}>Open top Drawer</Button>
			<Button on:click={openBottom}>Open bottom Drawer</Button>
			<Drawer bind:open={leftDrawer}>
				<div>content of left Drawer</div>
			</Drawer>
			<Drawer bind:open={rightDrawer} right>
				<div>content of right Drawer</div>
			</Drawer>
			<Drawer bind:open={topDrawer} top>
				<div>content of top Drawer</div>
			</Drawer>
			<Drawer bind:open={bottomDrawer} bottom>
				<div>content of bottom Drawer</div>
			</Drawer>
		</SimpleCode>
	</TabItem>
</Tabs>
