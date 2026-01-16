<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import TextArea from '../../../components/TextArea/TextArea.svelte';
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
		<TagCode name="TextArea" props={['disabled', 'label="Disabled"']}></TagCode>
		<TagCode name="TextArea" props={['label="Not Disabled"']}></TagCode>
	</div>
	<div slot="preview">
		<TextArea label="Name" disabled />
		<TextArea label="Parent Name" />
	</div>
</SampleWrapper>
