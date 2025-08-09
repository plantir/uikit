<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Button" props={['block']}>block</TagCode>
	</div>
	<div slot="preview" class="flex w-full items-center justify-center">
		<Button block>block</Button>
	</div>
</SampleWrapper>