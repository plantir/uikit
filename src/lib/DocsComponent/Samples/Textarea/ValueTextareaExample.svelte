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
	let value = 'John Snow';
	let parentName = 'Stark?!';
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
            let value = 'John Snow';
            let parentName = 'Stark?!'
		</ScriptCode>
		</pre>
	</ShowCode>
{:else if activeTab == 'html'}
	<ShowCode language="svelte">
		<TagCode name="TextArea" props={['{value}', 'label="Name"']}></TagCode>
		<TagCode name="TextArea" props={['value={parentName}', 'label="Parent Name"']}></TagCode>
	</ShowCode>
{:else}
	<SimpleCode>
		<TextArea {value} label="Name" />
		<TextArea value={parentName} label="Parent Name" />
	</SimpleCode>
{/if}
