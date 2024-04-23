<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	let activeTab = 'javascript';
	let loading_button = false;
	function click() {
		loading_button = true;
		setTimeout(() => {
			loading_button = false;
		}, 2000);
	}
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
				let loading_button = false;
				function click(){'{'}
				loading_button = true;
				setTimeout(() => {'{'}
					loading_button = false;
				{'}'}, 2000);
				{'}'}
            </ScriptCode>
        </pre>
	</ShowCode>
{:else if activeTab == 'html'}
	<ShowCode language="svelte">
		<TagCode name="Button" props={['loading={loading_button}', 'on:click={click}']}
			>click me</TagCode
		><br />
	</ShowCode>
{:else}
	<SimpleCode>
		<Button loading={loading_button} on:click={click}>click me</Button>
	</SimpleCode>
{/if}
