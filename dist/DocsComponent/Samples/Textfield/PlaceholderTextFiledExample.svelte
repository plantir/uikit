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
	let activeTab = 'Preview';
	let value = 'John Snow';
	let parentName = '';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Textfield from '{$importDocumentSrc}/TextField.svelte';
				let value = 'John Snow';
				let parentName = ''
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode
			name="TextField"
			props={['{value}', 'label="Name"', 'placeholder="please fill this input"']}
		></TagCode>
		<TagCode
			name="TextField"
			props={['value={parentName}', 'label="Parent Name"', 'placeholder="please fill this input"']}
		></TagCode>
	</div>
	<div slot="preview">
		<TextField {value} label="Name" placeholder="please fill this input" />
		<TextField value={parentName} label="Parent Name" placeholder="please fill this input" />
	</div>
</SampleWrapper>
