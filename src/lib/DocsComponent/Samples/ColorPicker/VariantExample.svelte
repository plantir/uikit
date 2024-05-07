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
		<TagCode name="ColorPicker" props={['variant="glass"','label="glass"']} close_self />
		<TagCode name="ColorPicker" props={['variant="ghost"','label="ghost"']} close_self />
		<TagCode name="ColorPicker" props={['variant="outline"','label="outline"']} close_self />
	</div>
	<div slot="preview">
		<ColorPicker variant="glass" label="glass" />
		<ColorPicker variant="ghost" label="ghost" />
		<ColorPicker variant="outline" label="outline" />
	</div>
</SampleWrapper>
