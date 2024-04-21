<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/components/Components/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/components/Components/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/components/Components/ComponentCode/TagCode.svelte';
	import Tabs from '$lib/components/Components/Tabs/Tabs.svelte';
	import SimpleCode from '$lib/components/Components/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../../../store/index.js';
	import { onMount } from 'svelte';
	let activeTab = 0;
</script>

<Tabs tabs={['JAVASCRIPT', 'HTML', 'View']} bind:active={activeTab}>
	{#if activeTab == 0}
		<ShowCode language="javascript">
			<pre>
            <ScriptCode>
                import Button from '{$importDocumentSrc}/Button.svelte';
            </ScriptCode>
        </pre>
		</ShowCode>
	{:else if activeTab == 1}
		<ShowCode language="svelte">
			<TagCode name="Button" props={['size="lg"']}>lg</TagCode><br/>
			<TagCode name="Button" props={['size="md"']}>md</TagCode><br/>
			<TagCode name="Button" props={['size="sm"']}>sm</TagCode><br/>
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
</Tabs>
