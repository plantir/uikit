<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import DatePicker from '../../../components/DatePicker/DatePicker.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let dates = '';
	let defaultDates = ['2024-5-15', '2024-5-16'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
            <ScriptCode>
                import TextField from '{$importDocumentSrc}/TextField.svelte';
				let dates = ''
			    let defaultDates = ['2024-5-15', '2024-5-16']
            </ScriptCode>
        </pre>
	</div>
	<div slot="html">
		<TagCode name="DatePicker" props={['range', 'bind:value={dates}']}></TagCode>
		<TagCode name="DatePicker" props={['range', 'bind:value={defaultDates}']}></TagCode>
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
