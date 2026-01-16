<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import DatePicker from '../../../components/DatePicker/DatePicker.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">DatePicker</span> from '{$importDocumentSrc}/DatePicker.svelte';
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="DatePicker" props={['size="xl"', 'label="xl"']}></TagCode>
		<TagCode name="DatePicker" props={['size="lg"', 'label="lg"']}></TagCode>
		<TagCode name="DatePicker" props={['size="md"', 'label="md"']}></TagCode>
		<TagCode name="DatePicker" props={['size="sm"', 'label="sm"']}></TagCode>
		<TagCode name="DatePicker" props={['size="xs"', 'label="xs"']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<DatePicker size="xl" label="xl"></DatePicker>
			<DatePicker size="lg" label="lg"></DatePicker>
			<DatePicker size="md" label="md"></DatePicker>
			<DatePicker size="sm" label="sm"></DatePicker>
			<DatePicker size="xs" label="xs"></DatePicker>
		</div>
	</div>
</SampleWrapper>
