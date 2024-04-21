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
			<TagCode name="Button" props={['color="primary"']}>primary</TagCode><br />
			<TagCode name="Button" props={['color="secondary"']}>secondary</TagCode><br />
			<TagCode name="Button" props={['color="accent"']}>accent</TagCode><br />
			<TagCode name="Button" props={['color="error"']}>error</TagCode><br />
			<TagCode name="Button" props={['color="info"']}>info</TagCode><br />
			<TagCode name="Button" props={['color="success"']}>success</TagCode><br />
			<TagCode name="Button" props={['color="warning"']}>warning</TagCode><br />
			<TagCode name="Button">default</TagCode>
		</ShowCode>
	{:else}
		<SimpleCode>
			<Button color="primary">primary</Button>
			<Button color="secondary">secondary</Button>
			<Button color="accent">accent</Button>
			<Button color="error">error</Button>
			<Button color="info">info</Button>
			<Button color="success">success</Button>
			<Button color="warning">warning</Button>
			<Button>default</Button>
		</SimpleCode>
	{/if}
</Tabs>
