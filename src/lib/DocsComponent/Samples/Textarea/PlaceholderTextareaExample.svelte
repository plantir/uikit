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
	let activeTab = 'Preview';
	let value = 'John Snow';
	let parentName = '';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import TextArea from '{$importDocumentSrc}/TextArea.svelte';
				let value = 'John Snow';
				let parentName = ''
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode
			name="TextArea"
			props={['{value}', 'label="Name"', 'placeholder="please fill this input"']}
		></TagCode>
		<TagCode
			name="TextArea"
			props={['value={parentName}', 'label="Parent Name"', 'placeholder="please fill this input"']}
		></TagCode>
	</div>
	<div slot="preview">
		<TextArea {value} label="Name" placeholder="please fill this input" />
		<TextArea value={parentName} label="Parent Name" placeholder="please fill this input" />
	</div>
</SampleWrapper>
