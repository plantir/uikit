<script lang="ts">
	import ScriptCode from '../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../ComponentCode/ShowCode.svelte';
	import TagCode from '../ComponentCode/TagCode.svelte';
	import SimpleCode from '../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../store/index.js';
	import Tabs from '../../components/Tabs/Tabs.svelte';
	import TabItem from '../../components/Tabs/TabItem.svelte';
	import { Avatar, Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../index.js';
	let activeTab = $$slots.preview ? 'Preview' : 'Svelte';
</script>

<Tabs bind:selected={activeTab} variant="lift">
	{#if $$slots.preview}
		<TabItem title="Preview" value="Preview">
			<SimpleCode>
				<slot name="preview" />
			</SimpleCode>
		</TabItem>
	{/if}
	{#if $$slots.javascript}
		<TabItem title="Svelte" value="Svelte">
			<ShowCode language="svelte">
				<slot name="javascript" />
				<slot name="html" />
			</ShowCode>
		</TabItem>
	{/if}
</Tabs>

<style global>@reference "tailwindcss";
code pre {
  white-space: pre-line;
}</style>
