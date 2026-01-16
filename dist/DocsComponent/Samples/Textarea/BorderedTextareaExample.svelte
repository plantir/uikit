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
		<TagCode name="TextArea" props={['bordered', 'label="Bordered"']}></TagCode>
		<TagCode name="TextArea" props={['bordered={false}', 'label="Not Bordered"']}></TagCode>
	</div>
	<div slot="preview">
		<TextArea label="Name" bordered />
		<TextArea label="Parent Name" bordered={false} />
	</div>
</SampleWrapper>
