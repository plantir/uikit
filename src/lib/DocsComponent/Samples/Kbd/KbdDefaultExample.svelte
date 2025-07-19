<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CountDown from '$lib/components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import Diff from '$lib/components/Diff/Diff.svelte';
	import Kbd from '$lib/components/Kbd/Kbd.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Kbd</span> from '{$importDocumentSrc}/Kbd.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Kbd">K</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Kbd>K</Kbd>
		</div>
	</div>
</SampleWrapper>
