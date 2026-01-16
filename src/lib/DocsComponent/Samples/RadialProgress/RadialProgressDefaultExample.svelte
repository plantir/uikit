<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '$lib/components/RadialProgress/RadialProgress.svelte';
	let value: any = 50;
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">RadialProgress</span> from '{$importDocumentSrc}/RadialProgress.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex items-center gap-4"']}>
			<TagCode name="RadialProgress" props={['value="0"']}>0%</TagCode>
			<TagCode name="RadialProgress" props={['value="20"']}>20%</TagCode>
			<TagCode name="RadialProgress" props={['value="50"']}>50%</TagCode>
			<TagCode name="RadialProgress" props={['value="80"']}>80%</TagCode>
			<TagCode name="RadialProgress" props={['value="100"']}>100%</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center gap-4">
			<RadialProgress value="0">0%</RadialProgress>
			<RadialProgress value="20">20%</RadialProgress>
			<RadialProgress value="50">50%</RadialProgress>
			<RadialProgress value="80">80%</RadialProgress>
			<RadialProgress value="100">100%</RadialProgress>
		</div>
	</div>
</SampleWrapper>
