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
	let open = $state(false);
	let type: DrawerTransitionTypes = $state('fly');
	let items: DrawerTransitionTypes[] = [
		'fly',
		'fade',
		'slide',
		'blur',
		'in:fly',
		'out:fly',
		'in:slide',
		'out:slide',
		'in:fade',
		'out:fade',
		'in:blur',
		'out:blur'
	];
	function openDrawer() {
		open = !open;
	}
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import FunctionCode from '$lib/DocsComponent/ComponentCode/FunctionCode.svelte';
	import Select from '$lib/components/Select/Select.svelte';
	import type { DrawerTransitionTypes } from '$lib/components/Drawer/Drawer.type.js';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Drawer</span> from '{$importDocumentSrc}/Drawer.svelte';
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
			<br />
			<LetCode name="open" value={false}></LetCode>
			<FunctionCode name="openDrawer">
				<span class="text-green-500">open</span> = !<span class="text-green-500">open</span>;
			</FunctionCode>
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Button" one_line props={['onclick={openDrawer}']}>Open Drawer</TagCode>
		<TagCode name="Drawer" props={['bind:open']}>
			<TagCode name="div">content of inside Drawer</TagCode>
			<TagCode one_line name="Button" props={['onclick={openDrawer}']}>Close</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Select bind:value={type} {items}></Select>
		<Button onclick={openDrawer}>Open Drawer</Button>
		<Drawer bind:open transitionType={type}>
			<div>content of inside Drawer</div>
			<Button onclick={openDrawer}>Close</Button>
		</Drawer>
	</div>
</SampleWrapper>
