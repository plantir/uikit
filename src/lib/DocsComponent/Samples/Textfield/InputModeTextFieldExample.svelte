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
		<TagCode name="TextField" props={['inputmode="none"', 'label="none"']}></TagCode><br />
		<TagCode name="TextField" props={['inputmode="tel"', 'label="tel"']}></TagCode><br />
		<TagCode name="TextField" props={['inputmode="url"', 'label="url"']}></TagCode><br />
		<TagCode name="TextField" props={['inputmode="email"', 'label="email"']}></TagCode><br />
		<TagCode name="TextField" props={['inputmode="numeric"', 'label="numeric"']}></TagCode><br />
		<TagCode name="TextField" props={['inputmode="decimal"', 'label="decimal"']}></TagCode><br />
		<TagCode name="TextField" props={['inputmode="search"', 'label="search"']}></TagCode><br />
		<TagCode name="TextField" props={['inputmode="text"', 'label="default-text"']}></TagCode>
	</ShowCode>
{:else}
	<SimpleCode>
		<div class="flex flex-wrap gap-4">
			<TextField inputmode="none" label="none"></TextField>
			<TextField inputmode="tel" label="tel"></TextField>
			<TextField inputmode="url" label="url"></TextField>
			<TextField inputmode="email" label="email"></TextField>
			<TextField inputmode="numeric" label="numeric"></TextField>
			<TextField inputmode="decimal" label="decimal"></TextField>
			<TextField inputmode="search" label="search"></TextField>
			<TextField inputmode="text" label="text"></TextField>
		</div>
	</SimpleCode>
{/if}
