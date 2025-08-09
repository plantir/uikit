<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalColor } from '$lib/utils/El.types.js';
	let activeTab = 'Preview';
	let colors: GlobalColor[] = [
		'primary',
		'secondary',
		'accent',
		'success',
		'info',
		'error',
		'warning',
		'neutral'
	];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="Button" props={[`color="${color}"`, 'active']}>{color}</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full flex items-center justify-center gap-2 flex-wrap">
		{#each colors as color}
			<Button active {color}>{color}</Button>
		{/each}
	</div>
</SampleWrapper>
