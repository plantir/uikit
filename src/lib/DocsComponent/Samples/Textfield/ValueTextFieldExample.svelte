<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
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
			import Textfield from '{$importDocumentSrc}/TextField.svelte';
            let value = 'John Snow';
            let parentName = 'Stark?!'
		</ScriptCode>
		</pre>
	</ShowCode>
{:else if activeTab == 'html'}
	<ShowCode language="svelte">
		<TagCode name="TextField" props={['{value}', 'label="Name"']}></TagCode><br />
		<TagCode name="TextField" props={['value={parentName}', 'label="Parent Name"']}></TagCode>
	</ShowCode>
{:else}
	<SimpleCode>
		<TextField {value} label="Name" />
		<TextField value={parentName} label="Parent Name" />
	</SimpleCode>
{/if}
