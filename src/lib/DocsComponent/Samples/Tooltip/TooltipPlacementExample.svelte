<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '$lib/components/RadialProgress/RadialProgress.svelte';
	import Skeleton from '$lib/components/Skeleton/Skeleton.svelte';
	import Toast from '$lib/components/Toast/Toast.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Tooltip from '$lib/components/Tooltip/Tooltip.svelte';
	import type { TooltipPlacement } from '$lib/components/Tooltip/Tooltip.type.js';
	let placements: TooltipPlacement[] = ['top', 'bottom', 'left', 'right'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Tooltip</span> from '{$importDocumentSrc}/Tooltip.svelte';
			import <span class="text-green-600">Alert</span> from '{$importDocumentSrc}/Alert.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each placements as placement}
			<TagCode name="Toast" props={[`placement="${placement}"`]}>
				<TagCode name="div" props={['slot="title"']}>
					<TagCode
						name="div"
						props={['class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black"']}
						>Wow!</TagCode
					>
				</TagCode>
				<TagCode name="Button">Hover me</TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex items-center gap-4 h-[200px]">
			{#each placements as placement}
				<Tooltip {placement}>
					<div slot="title">
						<div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
					</div>
					<Button>Hover me</Button>
				</Tooltip>
			{/each}
		</div>
	</div>
</SampleWrapper>
