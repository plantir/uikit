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
		<TagCode name="TextArea" props={['size="lg"', 'label="lg"']}></TagCode>
		<TagCode name="TextArea" props={['size="md"', 'label="md"']}></TagCode>
		<TagCode name="TextArea" props={['size="sm"', 'label="sm"']}></TagCode>
		<TagCode name="TextArea" props={['size="xs"', 'label="xs"']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<TextArea size="lg" label="lg"></TextArea>
			<TextArea size="md" label="md"></TextArea>
			<TextArea size="sm" label="sm"></TextArea>
			<TextArea size="xs" label="xs"></TextArea>
		</div>
	</div>
</SampleWrapper>
