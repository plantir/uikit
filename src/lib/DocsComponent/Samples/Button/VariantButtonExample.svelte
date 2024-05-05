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
			import Button from '{$importDocumentSrc}/Button.svelte';
		</ScriptCode>
	</pre>
	</ShowCode>
{:else if activeTab == 'html'}
	<ShowCode language="svelte">
		<TagCode name="Button" props={['variant="glass"']}>glass</TagCode>
		<TagCode name="Button" props={['variant="ghost"']}>ghost</TagCode>
		<TagCode name="Button" props={['variant="link"']}>link</TagCode>
		<TagCode name="Button" props={['variant="outline"']}>outline</TagCode>
	</ShowCode>
{:else}
	<SimpleCode>
		<Button variant="glass">glass</Button>
		<Button variant="ghost">ghost</Button>
		<Button variant="link">link</Button>
		<Button variant="outline">outline</Button>
	</SimpleCode>
{/if}
