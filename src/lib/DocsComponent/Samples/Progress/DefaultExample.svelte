<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { Progress } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let value: any = 50;
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Progress</span> from '{$importDocumentSrc}/Progress.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="w-56"']}>
			<TagCode close_self name="Progress" props={['value="0"']}></TagCode>
			<TagCode close_self name="Progress" props={['value="20"']}></TagCode>
			<TagCode close_self name="Progress" props={['value="50"']}></TagCode>
			<TagCode close_self name="Progress" props={['value="80"']}></TagCode>
			<TagCode close_self name="Progress" props={['value="100"']}></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="w-56">
			<Progress value="0" />
			<Progress value="20" />
			<Progress value="50" />
			<Progress value="80" />
			<Progress value="100" />
		</div>
	</div>
</SampleWrapper>
