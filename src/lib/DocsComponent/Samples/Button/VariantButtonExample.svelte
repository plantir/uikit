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
		<TagCode name="Button" props={['variant="glass"']}>glass</TagCode>
		<TagCode name="Button" props={['variant="ghost"']}>ghost</TagCode>
		<TagCode name="Button" props={['variant="link"']}>link</TagCode>
		<TagCode name="Button" props={['variant="outline"']}>outline</TagCode>
	</div>
	<div slot="preview">
		<Button variant="glass">glass</Button>
		<Button variant="ghost">ghost</Button>
		<Button variant="link">link</Button>
		<Button variant="outline">outline</Button>
	</div>
</SampleWrapper>
