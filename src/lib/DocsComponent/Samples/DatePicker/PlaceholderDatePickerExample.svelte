<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
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
