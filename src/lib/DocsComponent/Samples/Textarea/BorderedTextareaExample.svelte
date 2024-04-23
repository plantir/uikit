<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
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
		<TagCode name="TextArea" props={['bordered', 'label="Bordered"']}></TagCode><br />
		<TagCode name="TextArea" props={['bordered={false}', 'label="Not Bordered"']}></TagCode>
	</ShowCode>
{:else}
	<SimpleCode>
		<TextArea label="Name" bordered />
		<TextArea label="Parent Name" bordered={false} />
	</SimpleCode>
{/if}
