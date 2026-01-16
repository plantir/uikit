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
	let activeTab = 'Preview';
	let value = 'John Snow';
	let parentName = '';
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
		<TagCode
			name="DatePickcer"
			props={['{value}', 'label="Name"', 'placeholder="please select a date"']}
		></TagCode>
	</div>
	<div slot="preview">
		<DatePicker  label="Name" placeholder="Please Select a date" />
	</div>
</SampleWrapper>
