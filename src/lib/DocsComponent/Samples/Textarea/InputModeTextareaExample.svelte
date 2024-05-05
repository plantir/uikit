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
		<TagCode name="TextArea" props={['inputmode="none"', 'label="none"']}></TagCode>
		<TagCode name="TextArea" props={['inputmode="tel"', 'label="tel"']}></TagCode>
		<TagCode name="TextArea" props={['inputmode="url"', 'label="url"']}></TagCode>
		<TagCode name="TextArea" props={['inputmode="email"', 'label="email"']}></TagCode>
		<TagCode name="TextArea" props={['inputmode="numeric"', 'label="numeric"']}></TagCode>
		<TagCode name="TextArea" props={['inputmode="decimal"', 'label="decimal"']}></TagCode>
		<TagCode name="TextArea" props={['inputmode="search"', 'label="search"']}></TagCode>
		<TagCode name="TextArea" props={['inputmode="text"', 'label="default-text"']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<TextArea inputmode="none" label="none"></TextArea>
			<TextArea inputmode="tel" label="tel"></TextArea>
			<TextArea inputmode="url" label="url"></TextArea>
			<TextArea inputmode="email" label="email"></TextArea>
			<TextArea inputmode="numeric" label="numeric"></TextArea>
			<TextArea inputmode="decimal" label="decimal"></TextArea>
			<TextArea inputmode="search" label="search"></TextArea>
			<TextArea inputmode="text" label="text"></TextArea>
		</div>
	</div>
</SampleWrapper>
