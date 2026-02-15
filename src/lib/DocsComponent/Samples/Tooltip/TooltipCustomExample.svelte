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
	import SnippetTagCode from '$lib/DocsComponent/ComponentCode/SnippetTagCode.svelte';
	let show = $state(false);
	const showToast = () => {
		show = true;
		setTimeout(() => {
			show = false;
		}, 2000);
	};
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
		<TagCode name="Tooltip">
			<SnippetTagCode name="titleSnippet">
				<TagCode
					name="div"
					props={['class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black"']}
					>Wow!</TagCode
				>
			</SnippetTagCode>
			<TagCode name="Button">Hover me</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="h-[250px] flex items-center justify-center">
			<Tooltip>
				{#snippet titleSnippet()}
					<div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
				{/snippet}
				<Button>Hover me</Button>
			</Tooltip>
		</div>
	</div>
</SampleWrapper>
