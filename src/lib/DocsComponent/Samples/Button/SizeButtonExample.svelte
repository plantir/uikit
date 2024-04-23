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
	let activeTab = 'Javascript';
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
		<TagCode name="Button" props={['size="lg"']}>lg</TagCode><br />
		<TagCode name="Button" props={['size="md"']}>md</TagCode><br />
		<TagCode name="Button" props={['size="sm"']}>sm</TagCode><br />
		<TagCode name="Button" props={['size="xs"']}>xs</TagCode>
	</ShowCode>
{:else}
	<SimpleCode>
		<Button size="lg">lg</Button>
		<Button size="md">md</Button>
		<Button size="sm">sm</Button>
		<Button size="xs">xs</Button>
	</SimpleCode>
{/if}
