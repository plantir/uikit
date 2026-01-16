<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '$lib/components/Status/Status.svelte';
	import type { GlobalColor } from '$lib/utils/El.types.js';
	let colors: GlobalColor[] = [
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
			import <span class="text-green-600">Status</span> from '{$importDocumentSrc}/Status.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="Status" props={[`color="${color}"`]}></TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center gap-2">
			{#each colors as color}
				<Status {color}></Status>
			{/each}
		</div>
	</div>
</SampleWrapper>
