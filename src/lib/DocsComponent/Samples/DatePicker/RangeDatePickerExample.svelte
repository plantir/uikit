<script lang="ts">
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let dates = '';
	let defaultDates = ['2024-5-15', '2024-5-16'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">DatePicker</span> from '{$importDocumentSrc}/DatePicker.svelte';
			<br />
			<LetCode name="dates" value="" />
			<LetCode name="defaultDates" value="['2024-5-15', '2024-5-16']" />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="DatePicker" props={['range', 'bind:value={dates}', 'label="Range picker"']}></TagCode>
		<TagCode name="DatePicker" props={['range', 'bind:value={defaultDates}', 'label="Default range"']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<DatePicker bind:value={dates} range label="Range picker"></DatePicker>
			<DatePicker bind:value={defaultDates} range label="Default range"></DatePicker>
		</div>
		<div>
			Dates: {dates}
		</div>
		<div>
			DefaultDates: {defaultDates}
		</div>
	</div>
</SampleWrapper>
