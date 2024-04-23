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
		<TagCode name="TextArea" props={['size="lg"', 'label="lg"']}></TagCode><br />
		<TagCode name="TextArea" props={['size="md"', 'label="md"']}></TagCode><br />
		<TagCode name="TextArea" props={['size="sm"', 'label="sm"']}></TagCode><br />
		<TagCode name="TextArea" props={['size="xs"', 'label="xs"']}></TagCode><br />
	</ShowCode>
{:else}
	<SimpleCode>
		<div class="flex flex-wrap gap-4">
			<TextArea size="lg" label="lg"></TextArea>
			<TextArea size="md" label="md"></TextArea>
			<TextArea size="sm" label="sm"></TextArea>
			<TextArea size="xs" label="xs"></TextArea>
		</div>
	</SimpleCode>
{/if}
