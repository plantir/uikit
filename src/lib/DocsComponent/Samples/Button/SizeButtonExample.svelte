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
		<TagCode name="Button" props={['size="lg"']}>lg</TagCode>
		<TagCode name="Button" props={['size="md"']}>md</TagCode>
		<TagCode name="Button" props={['size="sm"']}>sm</TagCode>
		<TagCode name="Button" props={['size="xs"']}>xs</TagCode>
	</div>
	<div slot="preview">
		<Button size="lg">lg</Button>
		<Button size="md">md</Button>
		<Button size="sm">sm</Button>
		<Button size="xs">xs</Button>
	</div>
</SampleWrapper>
