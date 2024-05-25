<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	let value1 = '2024-5-15';
	let value2 = '2024/5/15';
	import SampleWrapper from '../SampleWrapper.svelte';
	import { DatePicker } from '$lib/index.js';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import DatePicker from '{$importDocumentSrc}/DatePicker.svelte';
				let value = '2024-5-15';
				let value = '2024/5/15';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="DatePicker" props={['{value}', 'label="Date"']}></TagCode>
	</div>
	<div slot="preview">
		<DatePicker value = {value1} label="Name" />
		<DatePicker value ={value2} label="Name" />
	</div>
</SampleWrapper>
