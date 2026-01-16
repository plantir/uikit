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
		<TagCode name="div" props={['class="flex w-52 flex-col gap-4"']}>
			<TagCode name="div" props={['class="flex items-center gap-4"']}>
				<TagCode name="Skeleton" props={['class=" h-16 w-16  rounded-full!"']}></TagCode>
				<TagCode name="div" props={['class="flex flex-col gap-4"']}>
					<TagCode name="Skeleton" props={['class=" h-4 w-20"']}></TagCode>
					<TagCode name="Skeleton" props={['class=" h-4 w-28"']}></TagCode>
				</TagCode>
			</TagCode>
			<TagCode name="Skeleton" close_self props={['class="h-32 w-full"']}></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex w-52 flex-col gap-4">
			<div class="flex items-center gap-4">
				<Skeleton class=" h-16 w-16  rounded-full!" />
				<div class="flex flex-col gap-4">
					<Skeleton class=" h-4 w-20" />
					<Skeleton class=" h-4 w-28" />
				</div>
			</div>
			<Skeleton class="h-32 w-full" />
		</div>
	</div>
</SampleWrapper>
