<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let form: any = {};
	import SampleWrapper from '../SampleWrapper.svelte';
	import Swap from '$lib/components/Swap/Swap.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Dropdown from '{$importDocumentSrc}/Dropdown.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div">
			<TagCode name="Dropdown" props={['placement="top-start"']}>
				<TagCode name="Button" props={['slot="toggler"']}>Open Top Start Dropdown</TagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
			<TagCode name="Dropdown" props={['placement="top"']}>
				<TagCode name="Button" props={['slot="toggler"']}>Open Top Dropdown</TagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
			<TagCode name="Dropdown" props={['placement="top-end"']}>
				<TagCode name="Button" props={['slot="toggler"']}>Open Top End Dropdown</TagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center justify-center gap-1 h-[200px]">
			<Dropdown placement="top-start">
				<Button slot="toggler">Open Top Start Dropdown</Button>
				List of items...
			</Dropdown>
			<Dropdown placement="top">
				<Button slot="toggler">Open Top Dropdown</Button>
				List of items...
			</Dropdown>
			<Dropdown placement="top-end">
				<Button slot="toggler">Open Top End Dropdown</Button>
				List of items...
			</Dropdown>
		</div>
	</div>
</SampleWrapper>
