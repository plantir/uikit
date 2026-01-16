<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	import SampleWrapper from '../SampleWrapper.svelte';
	import Swap from '../../../components/Swap/Swap.svelte';
	import Dropdown from '../../../components/Dropdown/Dropdown.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Dropdown</span> from '{$importDocumentSrc}/Dropdown.svelte';
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div">
			<TagCode name="Dropdown" props={['placement="left-start"']}>
				<TagCode name="Button" props={['slot="toggler"']}>Open left Start Dropdown</TagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
			<TagCode name="Dropdown" props={['placement="left"']}>
				<TagCode name="Button" props={['slot="toggler"']}>Open left Dropdown</TagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
			<TagCode name="Dropdown" props={['placement="left-end"']}>
				<TagCode name="Button" props={['slot="toggler"']}>Open left End Dropdown</TagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center justify-center gap-1 h-[200px]">
			<Dropdown placement="left-start">
				<Button slot="toggler">Open left Start Dropdown</Button>
				List of items...
			</Dropdown>
			<Dropdown placement="left">
				<Button slot="toggler">Open left Dropdown</Button>
				List of items...
			</Dropdown>
			<Dropdown placement="left-end">
				<Button slot="toggler">Open left End Dropdown</Button>
				List of items...
			</Dropdown>
		</div>
	</div>
</SampleWrapper>
