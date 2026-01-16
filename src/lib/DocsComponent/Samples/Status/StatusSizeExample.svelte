<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '$lib/components/Status/Status.svelte';
	import type { GlobalSize } from '$lib/utils/El.types.js';
	let sizes: GlobalSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Status</span> from '{$importDocumentSrc}/Status.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each sizes as size}
			<TagCode name="Status" props={[`size="${size}"`]}></TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center gap-2">
			{#each sizes as size}
				<Status {size}></Status>
			{/each}
		</div>
	</div>
</SampleWrapper>
