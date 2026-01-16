<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import ColorPicker from '../../../components/ColorPicker/ColorPicker.svelte';
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
