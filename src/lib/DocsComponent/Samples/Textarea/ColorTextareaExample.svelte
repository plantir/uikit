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
	import TextArea from '$lib/components/TextArea/TextArea.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
            <ScriptCode>
                import TextArea from '{$importDocumentSrc}/TextArea.svelte';
            </ScriptCode>
        </pre>
	</div>
	<div slot="html">
		<TagCode name="TextArea" props={['color="primary"', 'label="primary"']}></TagCode>
		<TagCode name="TextArea" props={['color="secondary"', 'label="secondary"']}></TagCode>
		<TagCode name="TextArea" props={['color="accent"', 'label="accent"']}></TagCode>
		<TagCode name="TextArea" props={['color="error"', 'label="error"']}></TagCode>
		<TagCode name="TextArea" props={['color="info"', 'label="info"']}></TagCode>
		<TagCode name="TextArea" props={['color="success"', 'label="success"']}></TagCode>
		<TagCode name="TextArea" props={['color="warning"', 'label="warning"']}></TagCode>
		<TagCode name="TextArea" props={['label="default"']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<TextArea color="primary" label="primary"></TextArea>
			<TextArea color="secondary" label="secondary"></TextArea>
			<TextArea color="accent" label="accent"></TextArea>
			<TextArea color="error" label="error"></TextArea>
			<TextArea color="info" label="info"></TextArea>
			<TextArea color="success" label="success"></TextArea>
			<TextArea color="warning" label="warning"></TextArea>
			<TextArea label="default"></TextArea>
		</div>
	</div>
</SampleWrapper>
