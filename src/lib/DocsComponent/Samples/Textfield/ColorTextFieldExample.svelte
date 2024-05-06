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
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
            <ScriptCode>
                import TextField from '{$importDocumentSrc}/TextField.svelte';
            </ScriptCode>
        </pre>
	</div>
	<div slot="html">
		<TagCode name="TextField" props={['color="primary"', 'label="primary"']}></TagCode>
		<TagCode name="TextField" props={['color="secondary"', 'label="secondary"']}></TagCode>
		<TagCode name="TextField" props={['color="accent"', 'label="accent"']}></TagCode>
		<TagCode name="TextField" props={['color="error"', 'label="error"']}></TagCode>
		<TagCode name="TextField" props={['color="info"', 'label="info"']}></TagCode>
		<TagCode name="TextField" props={['color="success"', 'label="success"']}></TagCode>
		<TagCode name="TextField" props={['color="warning"', 'label="warning"']}></TagCode>
		<TagCode name="TextField" props={['label="default"']}></TagCode>
	</div>
	<div slot="preview">
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
	</div>
</SampleWrapper>
