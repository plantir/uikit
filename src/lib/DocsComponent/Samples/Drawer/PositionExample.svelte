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
	let activeTab = 'Preview';
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
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
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
	</div>
	<div slot="html">
		<TagCode name="Button" one_line props={['on:click={openLeft}']}>Open left Drawer</TagCode>
		<TagCode name="Button" one_line props={['on:click={openRightt}']}>Open right Drawer</TagCode>
		<TagCode name="Button" one_line props={['on:click={openTop}']}>Open top Drawer</TagCode>
		<TagCode name="Button" one_line props={['on:click={openBottom}']}>Open bottom Drawer</TagCode>
		<TagCode name="Drawer" props={['bind:open={leftDrawer}']}>
			<TagCode name="div">content of inside Drawer</TagCode>
		</TagCode>
		<TagCode name="Drawer" props={['bind:open={rightDrawer}', 'right']}>
			<TagCode name="div">content of inside Drawer</TagCode>
		</TagCode>
		<TagCode name="Drawer" props={['bind:open={topDrawer}', 'top']}>
			<TagCode name="div">content of inside Drawer</TagCode>
		</TagCode>
		<TagCode name="Drawer" props={['bind:open={bottomDrawer}', 'bottom']}>
			<TagCode name="div">content of inside Drawer</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-2">
			<Button on:click={openLeft}>Open left Drawer</Button>
			<Button on:click={openRightt}>Open right Drawer</Button>
			<Button on:click={openTop}>Open top Drawer</Button>
			<Button on:click={openBottom}>Open bottom Drawer</Button>
		</div>
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
	</div>
</SampleWrapper>
