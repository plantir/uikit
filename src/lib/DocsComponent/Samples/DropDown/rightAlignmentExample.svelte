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
