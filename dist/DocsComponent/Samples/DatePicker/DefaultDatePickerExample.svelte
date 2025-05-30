<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import { DatePicker } from '../../../index.js';
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
		<TagCode name="DatePicker"></TagCode>
	</div>
	<div slot="preview">
		<DatePicker />
	</div>
</SampleWrapper>
