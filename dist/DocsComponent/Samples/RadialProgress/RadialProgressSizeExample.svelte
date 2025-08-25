<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '../../../components/RadialProgress/RadialProgress.svelte';
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
			<TagCode name="RadialProgress" props={['value="50"', 'size="10rem"']}>50%</TagCode>
			<TagCode name="RadialProgress" props={['value="50"', 'size="8rem"']}>50%</TagCode>
			<TagCode name="RadialProgress" props={['value="50"', 'size="5rem"']}>50%</TagCode>
			<TagCode name="RadialProgress" props={['value="50"', 'size="60px"']}>50%</TagCode>
			<TagCode name="RadialProgress" props={['value="50"', 'size="55px"']}>50%</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center gap-4">
			<RadialProgress value="50" size="10rem">50%</RadialProgress>
			<RadialProgress value="50" size="8rem">50%</RadialProgress>
			<RadialProgress value="50" size="5rem">50%</RadialProgress>
			<RadialProgress value="50" size="60px">50%</RadialProgress>
			<RadialProgress value="50" size="55px">50%</RadialProgress>
		</div>
	</div>
</SampleWrapper>
