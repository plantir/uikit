<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/components/Components/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/components/Components/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/components/Components/ComponentCode/TagCode.svelte';
	import Tabs from '$lib/components/Components/Tabs/Tabs.svelte';
	import SimpleCode from '$lib/components/Components/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../../../store/index.js';
	let activeTab = 0;
	let loading_button = false;
	function click() {
		loading_button = true;
		setTimeout(() => {
			loading_button = false;
		}, 2000);
	}
</script>

<Tabs tabs={['JAVASCRIPT', 'HTML', 'View']} bind:active={activeTab}>
	{#if activeTab == 0}
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
	{:else if activeTab == 1}
		<ShowCode language="svelte">
			<TagCode name="Button" props={['loading={loading_button}', 'on:click={click}']}>click me</TagCode><br />
		</ShowCode>
	{:else}
		<SimpleCode>
			<Button loading={loading_button} on:click={click}>click me</Button>
		</SimpleCode>
	{/if}
</Tabs>
