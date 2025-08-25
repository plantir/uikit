<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '../../../components/Status/Status.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Status</span> from '{$importDocumentSrc}/Status.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Status"></TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Status></Status>
		</div>
	</div>
</SampleWrapper>
