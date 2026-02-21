<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CountDown from '../../../components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import Diff from '../../../components/Diff/Diff.svelte';
	import SnippetTagCode from '../../ComponentCode/SnippetTagCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Diff</span> from '{$importDocumentSrc}/Diff.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Diff">
			<SnippetTagCode name="item1">
				<TagCode name="img" props={['src="your img url"']} close_self />
			</SnippetTagCode>
			<SnippetTagCode name="item2">
				<TagCode name="img" props={['src="your img url"']} close_self />
			</SnippetTagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Diff>
				{#snippet item1()}
					<img
						alt="daisy"
						src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
					/>
				{/snippet}
				{#snippet item2()}
					<img
						alt="daisy"
						src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
					/>
				{/snippet}
			</Diff>
		</div>
	</div>
</SampleWrapper>
