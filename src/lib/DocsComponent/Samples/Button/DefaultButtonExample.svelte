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
	<pre slot="javascript">
		<ScriptCode>
			import Button from '{$importDocumentSrc}/Button.svelte';
		</ScriptCode>
	</pre>
	<div slot="html">
		<TagCode name="Button" props={['color="primary"']}>primary</TagCode>
		<TagCode name="Button" props={['color="secondary"']}>secondary</TagCode>
		<TagCode name="Button" props={['color="accent"']}>accent</TagCode>
		<TagCode name="Button" props={['color="error"']}>error</TagCode>
		<TagCode name="Button" props={['color="info"']}>info</TagCode>
		<TagCode name="Button" props={['color="success"']}>success</TagCode>
		<TagCode name="Button" props={['color="warning"']}>warning</TagCode>
		<TagCode name="Button">default</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-2">
			<Button color="primary">primary</Button>
			<Button color="secondary">secondary</Button>
			<Button color="accent">accent</Button>
			<Button color="error">error</Button>
			<Button color="info">info</Button>
			<Button color="success">success</Button>
			<Button color="warning">warning</Button>
			<Button>default</Button>
		</div>
	</div>
</SampleWrapper>
