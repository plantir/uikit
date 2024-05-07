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
	import ColorPicker from '$lib/components/ColorPicker/ColorPicker.svelte';
	let activeTab = 'Preview';
</script>
<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import ColorPicker from '{$importDocumentSrc}/ColorPicker.svelte';
		</ScriptCode>
	</pre>
	<div slot="html">
		<TagCode name="ColorPicker" props={['wide','label="wide"']}></TagCode>
	</div>
	<div slot="preview">
		<ColorPicker wide label="wide" />
	</div>
</SampleWrapper>

