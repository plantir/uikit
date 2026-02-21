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
	import SnippetTagCode from '../../ComponentCode/SnippetTagCode.svelte';
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
			<TagCode name="Dropdown" props={['placement="right-start"']}>
				<SnippetTagCode name="togglerSnippet">
					<TagCode name="Button">Open right Start Dropdown</TagCode>
				</SnippetTagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
			<TagCode name="Dropdown" props={['placement="right"']}>
				<SnippetTagCode name="togglerSnippet">
					<TagCode name="Button">Open right Dropdown</TagCode>
				</SnippetTagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
			<TagCode name="Dropdown" props={['placement="right-end"']}>
				<SnippetTagCode name="togglerSnippet">
					<TagCode name="Button">Open right End Dropdown</TagCode>
				</SnippetTagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center justify-center gap-1 h-[200px]">
			<Dropdown placement="right-start">
				{#snippet togglerSnippet()}
					<Button>Open right Start Dropdown</Button>
				{/snippet}
				List of items...
			</Dropdown>
			<Dropdown placement="right">
				{#snippet togglerSnippet()}
					<Button>Open right Dropdown</Button>
				{/snippet}
				List of items...
			</Dropdown>
			<Dropdown placement="right-end">
				{#snippet togglerSnippet()}
					<Button>Open right End Dropdown</Button>
				{/snippet}
				List of items...
			</Dropdown>
		</div>
	</div>
</SampleWrapper>
