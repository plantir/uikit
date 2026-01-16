<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import { Progress } from '$lib/index.js';
	let colors: any = [
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
			import <span class="text-green-600">Progress</span> from '{$importDocumentSrc}/Progress.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode close_self name="Progress" props={[`color="${color}"`]}></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="w-56">
			{#each colors as color}
				<Progress {color}></Progress>
			{/each}
		</div>
	</div>
</SampleWrapper>
