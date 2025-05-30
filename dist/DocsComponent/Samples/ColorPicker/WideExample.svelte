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
		<TagCode name="ColorPicker" props={['wide','label="wide"']}></TagCode>
	</div>
	<div slot="preview">
		<ColorPicker wide label="wide" />
	</div>
</SampleWrapper>

