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
	import type { GlobalSize } from '$lib/utils/El.types.js';
	let sizes: GlobalSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
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
		{#each sizes as size}
			<TagCode
				name="TextArea"
				props={[`size="${size}"`, `label="${size}"`, 'placeholder="plaese fill this input"']}
			></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex flex-col gap-4">
			{#each sizes as size}
				<TextArea {size} label={size} placeholder="plaese fill this input"></TextArea>
			{/each}
		</div>
	</div>
</SampleWrapper>
