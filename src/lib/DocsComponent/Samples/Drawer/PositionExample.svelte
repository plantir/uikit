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
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import FunctionCode from '$lib/DocsComponent/ComponentCode/FunctionCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Drawer</span> from '{$importDocumentSrc}/Drawer.svelte';
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
			<br />
			<LetCode name="leftDrawer" value={false}></LetCode>
			<LetCode name="rightDrawer" value={false}></LetCode>
			<LetCode name="topDrawer" value={false}></LetCode>
			<LetCode name="bottomDrawer" value={false}></LetCode>
			<FunctionCode name="openLeft">
				<span class="text-green-500">leftDrawer</span> = <span class="text-red-600">true</span>;
			</FunctionCode>
			<FunctionCode name="openRightt">
				<span class="text-green-500">rightDrawer</span> = <span class="text-red-600">true</span>;
			</FunctionCode>
			<FunctionCode name="openTop">
				<span class="text-green-500">topDrawer</span> = <span class="text-red-600">true</span>;
			</FunctionCode>
			<FunctionCode name="openBottom">
				<span class="text-green-500">bottomDrawer</span> = <span class="text-red-600">true</span>;
			</FunctionCode>
		</TagCode>
		<br />
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
