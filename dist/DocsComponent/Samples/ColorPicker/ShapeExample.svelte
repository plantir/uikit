<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import { ColorPicker } from '../../../index.js';
	let activeTab = 'Preview';
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import ColorPicker from '{$importDocumentSrc}/ColorPicker.svelte';
		</ScriptCode>
	</pre>
	<div slot="html">
		<TagCode name="ColorPicker" props={['shape="circle"','label="circle"']} close_self></TagCode>
		<TagCode name="ColorPicker" props={['shape="square"','label="square"']} close_self></TagCode>
	</div>
	<div slot="preview">
		<ColorPicker shape="circle" label="circle" />
		<ColorPicker shape="square" label="square" />
	</div>
</SampleWrapper>
