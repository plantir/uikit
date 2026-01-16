<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '$lib/components/Status/Status.svelte';
	import TimeLine from '$lib/components/Timeline/TimeLine.svelte';
	import ArrayCode from '$lib/DocsComponent/ComponentCode/ArrayCode.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	let items = [
		{
			title: '1984',
			value: 1984,
			text: 'First Macintosh computer'
		},
		{
			title: '1998',
			value: 1998,
			text: 'iMac'
		},
		{
			title: '2001',
			value: 2001,
			text: 'iPod'
		},
		{
			title: '2007',
			value: 2007,
			text: 'iPhone'
		},
		{
			title: '2015',
			value: 2015,
			text: 'Apple Watch'
		}
	];
	let value = 2001;
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">TimeLine</span> from '{$importDocumentSrc}/TimeLine.svelte';
			<br />
			<ArrayCode name="items" {items} />
			<LetCode name="value" value="2001" />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="TimeLine" props={[`{items}`, 'clickable', 'bind:value']}></TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<TimeLine {items} clickable bind:value></TimeLine>
		</div>
	</div>
</SampleWrapper>
