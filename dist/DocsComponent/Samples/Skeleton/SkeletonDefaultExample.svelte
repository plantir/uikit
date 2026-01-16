<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '../../../components/RadialProgress/RadialProgress.svelte';
	import Skeleton from '../../../components/Skeleton/Skeleton.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Skeleton</span> from '{$importDocumentSrc}/Skeleton.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Skeleton" close_self props={['class="h-32 w-32"']}></TagCode>
	</div>
	<div slot="preview">
		<Skeleton class="h-32 w-32" />
	</div>
</SampleWrapper>
