<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Avatar, Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
</script>

<Tabs bind:selected={activeTab}>
	{#if $$slots.preview}
		<TabItem title="Preview" value="Preview">
			<SimpleCode>
				<slot name="preview" />
			</SimpleCode>
		</TabItem>
	{/if}
	{#if $$slots.javascript}
		<TabItem title="Javascript" value="javascript">
			<ShowCode language="javascript">
				<slot name="javascript" />
			</ShowCode>
		</TabItem>
	{/if}
	{#if $$slots.html}
		<TabItem title="Html" value="html">
			<ShowCode language="svelte">
				<slot name="html" />
			</ShowCode>
		</TabItem>
	{/if}
</Tabs>
