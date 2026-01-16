<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '../../../components/Status/Status.svelte';
	import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs.svelte';
	import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb.svelte';
	let items = ['Long Text 1', 'Long Text 2', 'Long Text 3', 'Long Text 4', 'Long Text 5'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Breadcrumbs</span> from '{$importDocumentSrc}/Breadcrumbs.svelte';
			import <span class="text-green-600">Breadcrumb</span> from '{$importDocumentSrc}/Breadcrumb.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Breadcrumbs" props={['class="w-[300px]"']}>
			{#each items as item}
				<TagCode name="Breadcrumb">
					<TagCode name="a" props={['href="#"']}>{item}</TagCode>
				</TagCode>
			{/each}
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Breadcrumbs class="w-[300px]">
				{#each items as item}
					<Breadcrumb>
						<a href="#">{item}</a>
					</Breadcrumb>
				{/each}
			</Breadcrumbs>
		</div>
	</div>
</SampleWrapper>
