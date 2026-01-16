<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '$lib/components/RadialProgress/RadialProgress.svelte';
	import type { ProgressColor } from '$lib/components/RadialProgress/RadialProgress.type.js';
	let value: any = 50;
	let colors: ProgressColor[] = [
		'primary',
		'secondary',
		'accent',
		'success',
		'warning',
		'info',
		'error',
		'neutral'
	];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">RadialProgress</span> from '{$importDocumentSrc}/RadialProgress.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex items-center gap-4 flex-wrap"']}>
			{#each colors as color}
				<TagCode name="RadialProgress" props={['value="50"', `color="${color}"`]}>50%</TagCode>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center gap-4 flex-wrap">
			{#each colors as color}
				<RadialProgress value="50" {color}>50%</RadialProgress>
			{/each}
		</div>
	</div>
</SampleWrapper>
