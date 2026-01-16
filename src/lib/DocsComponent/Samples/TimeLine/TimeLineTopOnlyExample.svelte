<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '$lib/components/Status/Status.svelte';
	import TimeLine from '$lib/components/Timeline/TimeLine.svelte';
	import ArrayCode from '$lib/DocsComponent/ComponentCode/ArrayCode.svelte';
	let items = [
		{
			title: '1984',
			value: 1984,
		},
		{
			title: '1998',
			value: 1998,
		},
		{
			title: '2001',
			value: 2001,
		},
		{
			title: '2007',
			value: 2007,
		},
		{
			title: '2015',
			value: 2015,
		}
	];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">TimeLine</span> from '{$importDocumentSrc}/TimeLine.svelte';
			<br/>
			<ArrayCode name="items" {items} />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="TimeLine" props={[`{items}`]}></TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<TimeLine {items}></TimeLine>
		</div>
	</div>
</SampleWrapper>
