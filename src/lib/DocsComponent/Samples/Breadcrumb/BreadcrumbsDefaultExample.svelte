<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '$lib/components/Status/Status.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs/Breadcrumbs.svelte';
	import Breadcrumb from '$lib/components/Breadcrumbs/Breadcrumb.svelte';
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
		<TagCode name="Breadcrumbs">
			<TagCode name="Breadcrumb">
				<TagCode name="a" props={['href="#"']}>Home</TagCode>
			</TagCode>
			<TagCode name="Breadcrumb">
				<TagCode name="a" props={['href="#"']}>Products</TagCode>
			</TagCode>
			<TagCode name="Breadcrumb">Product id</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Breadcrumbs>
				<Breadcrumb>
					<a href="#">Home</a>
				</Breadcrumb>
				<Breadcrumb>
					<a href="#">Products</a>
				</Breadcrumb>
				<Breadcrumb>Product id</Breadcrumb>
			</Breadcrumbs>
		</div>
	</div>
</SampleWrapper>
