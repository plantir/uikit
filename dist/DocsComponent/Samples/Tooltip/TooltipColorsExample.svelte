<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '../../../components/RadialProgress/RadialProgress.svelte';
	import Skeleton from '../../../components/Skeleton/Skeleton.svelte';
	import Toast from '../../../components/Toast/Toast.svelte';
	import Alert from '../../../components/Alert/Alert.svelte';
	import Button from '../../../components/Button/Button.svelte';
	import Tooltip from '../../../components/Tooltip/Tooltip.svelte';
	import type { GlobalColor } from '../../../utils/El.types.js';
	let colors: GlobalColor[] = [
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
			import <span class="text-green-600">Tooltip</span> from '{$importDocumentSrc}/Tooltip.svelte';
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="Tooltip" props={[`color="${color}"`]}>
				<TagCode name="Button" props={[`color="${color}"`]}>Hover me</TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex items-center justify-center felx-wrap h-[200px] gap-4">
			{#each colors as color}
				<Tooltip title="hello" {color}>
					<Button {color}>Hover me</Button>
				</Tooltip>
			{/each}
		</div>
	</div>
</SampleWrapper>
