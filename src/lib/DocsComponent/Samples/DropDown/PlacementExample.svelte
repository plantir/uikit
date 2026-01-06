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
	import SnippetTagCode from '$lib/DocsComponent/ComponentCode/SnippetTagCode.svelte';
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
			<TagCode name="Dropdown" props={['placement="top"']}>
				<SnippetTagCode name="togglerSnippet">
					<TagCode name="Button">Open Top Dropdown</TagCode>
				</SnippetTagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
			<TagCode name="Dropdown" props={['placement="right"']}>
				<SnippetTagCode name="togglerSnippet">
					<TagCode name="Button">Open Right Dropdown</TagCode>
				</SnippetTagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
			<TagCode name="Dropdown" props={['placement="bottom"']}>
				<SnippetTagCode name="togglerSnippet">
					<TagCode name="Button">Open Bottom Dropdown</TagCode>
				</SnippetTagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
			<TagCode name="Dropdown" props={['placement="left"']}>
				<SnippetTagCode name="togglerSnippet">
					<TagCode name="Button">Open Left Dropdown</TagCode>
				</SnippetTagCode>
				<TagCode name="div">List of items...</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center justify-center gap-1 h-[200px]">
			<Dropdown placement="top">
				{#snippet togglerSnippet()}
					<Button>Open Top Dropdown</Button>
				{/snippet}
				List of items...
			</Dropdown>
			<Dropdown placement="right">
				{#snippet togglerSnippet()}
					<Button>Open Right Dropdown</Button>
				{/snippet}
				List of items...
			</Dropdown>
			<Dropdown placement="bottom">
				{#snippet togglerSnippet()}
					<Button>Open Bottom Dropdown</Button>
				{/snippet}
				List of items...
			</Dropdown>
			<Dropdown placement="left">
				{#snippet togglerSnippet()}
					<Button>Open Left Dropdown</Button>
				{/snippet}
				List of items...
			</Dropdown>
		</div>
	</div>
</SampleWrapper>
