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
			import <span class="text-green-600">Toast</span> from '{$importDocumentSrc}/Toast.svelte';
			import <span class="text-green-600">Alert</span> from '{$importDocumentSrc}/Alert.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Toast" props={['placement="bottom-start"']}>
			<TagCode name="Alert" props={['color="info"']}>New message arrived.</TagCode>
			<TagCode name="Alert" props={['color="warning"']}>New message arrived.</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="h-[300px]">
			<Toast class="absolute!" placement="bottom-start">
				<Alert color="info">New message arrived.</Alert>
				<Alert color="warning">New message arrived.</Alert>
			</Toast>
		</div>
	</div>
</SampleWrapper>
