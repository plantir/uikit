<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import { DatePicker } from '../../../index.js';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">DatePicker</span> from '{$importDocumentSrc}/DatePicker.svelte';
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="DatePicker"></TagCode>
	</div>
	<div slot="preview">
		<DatePicker />
	</div>
</SampleWrapper>
