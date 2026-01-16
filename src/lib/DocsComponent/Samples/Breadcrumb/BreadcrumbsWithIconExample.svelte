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
				<TagCode name="a" props={['href="#"']}>
					<TagCode
						name="svg"
						props={[
							'xmlns="http://www.w3.org/2000/svg"',
							'fill="none"',
							'viewBox="0 0 24 24"',
							'class="h-4 w-4 stroke-current"'
						]}
					>
						<TagCode
							name="path"
							props={[
								'stroke-linecap="round"',
								'stroke-linejoin="round"',
								'stroke-width="2"',
								'd="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"'
							]}
						></TagCode>
					</TagCode>
					Home
				</TagCode>
			</TagCode>
			<TagCode name="Breadcrumb">
				<TagCode name="a" props={['href="#"']}>
					<TagCode
						name="svg"
						props={[
							'xmlns="http://www.w3.org/2000/svg"',
							'fill="none"',
							'viewBox="0 0 24 24"',
							'class="h-4 w-4 stroke-current"'
						]}
					>
						<TagCode
							name="path"
							props={[
								'stroke-linecap="round"',
								'stroke-linejoin="round"',
								'stroke-width="2"',
								'd="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"'
							]}
						></TagCode>
					</TagCode>
					Documents
				</TagCode>
			</TagCode>
			<TagCode name="Breadcrumb">
				<TagCode name="div">
					<TagCode
						name="svg"
						props={[
							'xmlns="http://www.w3.org/2000/svg"',
							'fill="none"',
							'viewBox="0 0 24 24"',
							'class="h-4 w-4 stroke-current"'
						]}
					>
						<TagCode
							name="path"
							props={[
								'stroke-linecap="round"',
								'stroke-linejoin="round"',
								'stroke-width="2"',
								'd="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"'
							]}
						></TagCode>
					</TagCode>
					Add Document
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Breadcrumbs>
				<Breadcrumb>
					<a href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="h-4 w-4 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
							></path>
						</svg>
						Home</a
					>
				</Breadcrumb>
				<Breadcrumb>
					<a href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="h-4 w-4 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
							></path>
						</svg>
						Documents
					</a>
				</Breadcrumb>
				<Breadcrumb>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="h-4 w-4 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							></path>
						</svg>
						Add Document
					</div>
				</Breadcrumb>
			</Breadcrumbs>
		</div>
	</div>
</SampleWrapper>
