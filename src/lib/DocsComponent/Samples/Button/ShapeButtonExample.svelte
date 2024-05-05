<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Button from '{$importDocumentSrc}/Button.svelte';
		</ScriptCode>
	</pre>
	<div slot="html">
		<TagCode name="Button" props={['shape="circle"']}>circle</TagCode>
		<TagCode name="Button" props={['shape="square"']}>square</TagCode>
	</div>
	<div slot="preview">
		<Button shape="circle">circle</Button>
		<Button shape="square">square</Button>
	</div>
</SampleWrapper>
<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript"></TabItem>
	<TabItem title="Html" value="html"></TabItem>
	<TabItem title="Preview" value="Preview"></TabItem>
</Tabs>
{#if activeTab == 'javascript'}
	<ShowCode language="javascript"></ShowCode>
{:else if activeTab == 'html'}
	<ShowCode language="svelte"></ShowCode>
{:else}
	<SimpleCode></SimpleCode>
{/if}
