<script lang="ts">
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let dates = '';
	let formattedValue = '';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">DatePicker</span> from '{$importDocumentSrc}/DatePicker.svelte';
			<br />
			<LetCode name="dates" value="" />
			<LetCode name="formattedValue" value="" />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="DatePicker" props={['bind:formattedValue={dates}']}></TagCode>
		<TagCode name="DatePicker" props={['bind:formattedValue={formattedValue}', 'range']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<DatePicker bind:formattedValue={dates} label="Date picker"></DatePicker>
			<DatePicker bind:formattedValue={formattedValue} range label="Range pikcer"></DatePicker>
		</div>
		<div>
			Formatted Date: {dates}
		</div>
		<div>
			Formatted Rages: {formattedValue}
		</div>
	</div>
</SampleWrapper>
