<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CountDown from '../../../components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import Diff from '../../../components/Diff/Diff.svelte';
	import Kbd from '../../../components/Kbd/Kbd.svelte';
	import type { GlobalSize } from '../../../utils/El.types.js';
	let sizes: (GlobalSize | 'xl')[] = ['xs', 'sm', 'md', 'lg', 'xl'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Kbd</span> from '{$importDocumentSrc}/Kbd.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each sizes as size}
			<TagCode name="Kbd" props={[`size="${size}"`]}>{size}</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center gap-2">
			{#each sizes as size}
				<Kbd {size}>{size}</Kbd>
			{/each}
		</div>
	</div>
</SampleWrapper>
