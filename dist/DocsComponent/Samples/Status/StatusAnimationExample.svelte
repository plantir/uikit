<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '../../../components/Status/Status.svelte';
	import type { GlobalSize } from '../../../utils/El.types.js';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Status</span> from '{$importDocumentSrc}/Status.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div">
			<TagCode name="Status" props={[`color="error"`, 'animate="ping"']}></TagCode>
			Server is down
		</TagCode>
		<TagCode name="div">
			<TagCode name="Status" props={[`color="info"`, 'animate="bounce"']}></TagCode>
			Unread messages
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center gap-2">
			<div>
				<Status color="error" animate="ping"></Status>
				Server is down
			</div>
			<div>
				<Status color="info" animate="bounce"></Status>
				Unread messages
			</div>
		</div>
	</div>
</SampleWrapper>
