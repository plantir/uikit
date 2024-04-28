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
	import TextField from '$lib/components/TextField/TextField.svelte';
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
                import TextField from '{$importDocumentSrc}/TextField.svelte';
            </ScriptCode>
        </pre>
	</ShowCode>
{:else if activeTab == 'html'}
	<ShowCode language="svelte">
		<TagCode name="TextField" props={['color="primary"', 'label="primary"']}></TagCode>
		<TagCode name="TextField" props={['color="secondary"', 'label="secondary"']}></TagCode>
		<TagCode name="TextField" props={['color="accent"', 'label="accent"']}></TagCode>
		<TagCode name="TextField" props={['color="error"', 'label="error"']}></TagCode>
		<TagCode name="TextField" props={['color="info"', 'label="info"']}></TagCode>
		<TagCode name="TextField" props={['color="success"', 'label="success"']}></TagCode>
		<TagCode name="TextField" props={['color="warning"', 'label="warning"']}></TagCode>
		<TagCode name="TextField" props={['label="default"']}></TagCode>
	</ShowCode>
{:else}
	<SimpleCode>
		<div class="flex flex-wrap gap-4">
			<TextField color="primary" label="primary"></TextField>
			<TextField color="secondary" label="secondary"></TextField>
			<TextField color="accent" label="accent"></TextField>
			<TextField color="error" label="error"></TextField>
			<TextField color="info" label="info"></TextField>
			<TextField color="success" label="success"></TextField>
			<TextField color="warning" label="warning"></TextField>
			<TextField label="default"></TextField>
		</div>
	</SimpleCode>
{/if}
