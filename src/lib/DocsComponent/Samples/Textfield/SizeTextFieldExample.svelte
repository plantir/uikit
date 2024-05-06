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
		<TagCode name="TextField" props={['size="lg"', 'label="lg"']}></TagCode>
		<TagCode name="TextField" props={['size="md"', 'label="md"']}></TagCode>
		<TagCode name="TextField" props={['size="sm"', 'label="sm"']}></TagCode>
		<TagCode name="TextField" props={['size="xs"', 'label="xs"']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<TextField size="lg" label="lg"></TextField>
			<TextField size="md" label="md"></TextField>
			<TextField size="sm" label="sm"></TextField>
			<TextField size="xs" label="xs"></TextField>
		</div>
	</div>
</SampleWrapper>
