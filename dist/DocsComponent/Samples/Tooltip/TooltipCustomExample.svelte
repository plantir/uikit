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
		<TagCode name="Toast">
			<TagCode name="div" props={['slot="title"']}>
				<TagCode
					name="div"
					props={['class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black"']}
					>Wow!</TagCode
				>
			</TagCode>
			<TagCode name="Button">Hover me</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="h-[250px] flex items-center justify-center">
			<Tooltip>
				<div slot="title">
					<div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
				</div>
				<Button>Hover me</Button>
			</Tooltip>
		</div>
	</div>
</SampleWrapper>
