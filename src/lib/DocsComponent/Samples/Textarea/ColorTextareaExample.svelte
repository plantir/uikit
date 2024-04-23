<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TextArea from '$lib/components/TextArea/TextArea.svelte';
	let activeTab = 'javascript';
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript"></TabItem>
	<TabItem title="Html" value="html"></TabItem>
	<TabItem title="Simple" value="simple"></TabItem>
</Tabs>
{#if activeTab == 'javascript'}
	<ShowCode language="javascript">
		<pre>
            <ScriptCode>
                import TextArea from '{$importDocumentSrc}/TextArea.svelte';
            </ScriptCode>
        </pre>
	</ShowCode>
{:else if activeTab == 'html'}
	<ShowCode language="svelte">
		<TagCode name="TextArea" props={['color="primary"', 'label="primary"']}></TagCode><br />
		<TagCode name="TextArea" props={['color="secondary"', 'label="secondary"']}></TagCode><br />
		<TagCode name="TextArea" props={['color="accent"', 'label="accent"']}></TagCode><br />
		<TagCode name="TextArea" props={['color="error"', 'label="error"']}></TagCode><br />
		<TagCode name="TextArea" props={['color="info"', 'label="info"']}></TagCode><br />
		<TagCode name="TextArea" props={['color="success"', 'label="success"']}></TagCode><br />
		<TagCode name="TextArea" props={['color="warning"', 'label="warning"']}></TagCode><br />
		<TagCode name="TextArea" props={['label="default"']}></TagCode>
	</ShowCode>
{:else}
	<SimpleCode>
		<div class="flex flex-wrap gap-4">
			<TextArea color="primary" label="primary"></TextArea>
			<TextArea color="secondary" label="secondary"></TextArea>
			<TextArea color="accent" label="accent"></TextArea>
			<TextArea color="error" label="error"></TextArea>
			<TextArea color="info" label="info"></TextArea>
			<TextArea color="success" label="success"></TextArea>
			<TextArea color="warning" label="warning"></TextArea>
			<TextArea label="default"></TextArea>
		</div>
	</SimpleCode>
{/if}
