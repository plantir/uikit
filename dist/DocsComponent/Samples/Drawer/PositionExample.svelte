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
	let leftDrawer = $state(false);
	let rightDrawer = $state(false);
	let topDrawer = $state(false);
	let bottomDrawer = $state(false);
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
	import LetCode from '../../ComponentCode/LetCode.svelte';
	import FunctionCode from '../../ComponentCode/FunctionCode.svelte';
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
		<TagCode name="Button" one_line props={['onclick={openLeft}']}>Open left Drawer</TagCode>
		<TagCode name="Button" one_line props={['onclick={openRightt}']}>Open right Drawer</TagCode>
		<TagCode name="Button" one_line props={['onclick={openTop}']}>Open top Drawer</TagCode>
		<TagCode name="Button" one_line props={['onclick={openBottom}']}>Open bottom Drawer</TagCode>
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
			<Button onclick={openLeft}>Open left Drawer</Button>
			<Button onclick={openRightt}>Open right Drawer</Button>
			<Button onclick={openTop}>Open top Drawer</Button>
			<Button onclick={openBottom}>Open bottom Drawer</Button>
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
