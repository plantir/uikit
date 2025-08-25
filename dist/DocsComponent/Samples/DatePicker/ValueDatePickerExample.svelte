<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	let value1 = '2024-5-15';
	let value2 = '2024/5/15';
	import SampleWrapper from '../SampleWrapper.svelte';
	import { DatePicker } from '../../../index.js';
	import LetCode from '../../ComponentCode/LetCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">DatePicker</span> from '{$importDocumentSrc}/DatePicker.svelte';
			<br />
			<LetCode name="value1" value="2024-5-15" />
			<LetCode name="value2" value="2024/5/15" />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="DatePicker" props={['{value}', 'label="Date"']}></TagCode>
	</div>
	<div slot="preview">
		<DatePicker value = {value1} label="Name" />
		<DatePicker value ={value2} label="Name" />
	</div>
</SampleWrapper>
