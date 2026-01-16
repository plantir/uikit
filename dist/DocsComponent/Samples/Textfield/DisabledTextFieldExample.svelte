<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import TextField from '../../../components/TextField/TextField.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Textfield from '{$importDocumentSrc}/TextField.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="TextField" props={['disabled', 'label="Disabled"']}></TagCode>
		<TagCode name="TextField" props={['label="Not Disabled"']}></TagCode>
	</div>
	<div slot="preview">
		<TextField label="Name" disabled />
		<TextField label="Parent Name" />
	</div>
</SampleWrapper>
