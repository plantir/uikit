<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import DatePicker from '../../../components/DatePicker/DatePicker.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import DatePicker from '{$importDocumentSrc}/DatePicker.svelte';
			</ScriptCode>
		</pre>
	</div>
	<div slot="html">
		<TagCode name="DatePicker" props={['disabled', 'label="Disabled"']}></TagCode>
	</div>
	<div slot="preview">
		<DatePicker label="Name" disabled />
	</div>
</SampleWrapper>
