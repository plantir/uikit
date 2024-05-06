<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
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
		<TagCode name="TextArea" props={['bordered', 'label="Bordered"']}></TagCode>
		<TagCode name="TextArea" props={['bordered={false}', 'label="Not Bordered"']}></TagCode>
	</div>
	<div slot="preview">
		<TextArea label="Name" bordered />
		<TextArea label="Parent Name" bordered={false} />
	</div>
</SampleWrapper>
