<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CountDown from '../../../components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import Diff from '../../../components/Diff/Diff.svelte';
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
			<TagCode name="div" props={['slot="item-1"']}>
				<TagCode name="img" props={['src="your img url"']} close_self />
			</TagCode>
			<TagCode name="div" props={['slot="item-2"']}>
				<TagCode name="img" props={['src="your img url"']} close_self />
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Diff>
				<div slot="item-1">
					<img
						alt="daisy"
						src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
					/>
				</div>
				<div slot="item-2">
					<img
						alt="daisy"
						src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
					/>
				</div>
			</Diff>
		</div>
	</div>
</SampleWrapper>
