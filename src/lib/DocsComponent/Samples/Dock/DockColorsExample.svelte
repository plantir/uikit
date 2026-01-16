<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Dock from '$lib/components/Dock/Dock.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
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
			import <span class="text-green-600">Dock</span> from '{$importDocumentSrc}/Dock.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="Dock" props={[`color="${color}"`]}>
				<TagCode name="button">
					<TagCode
						name="svg"
						props={[
							'class="size-[1.2em]"',
							'xmlns="http://www.w3.org/2000/svg"',
							'viewBox="0 0 24 24"'
						]}
					>
						<TagCode
							name="polyline"
							props={[
								'points="1 11 12 2 23 11"',
								'fill="none"',
								'stroke="currentColor"',
								'stroke-miterlimit="10"',
								'stroke-width="2"'
							]}
						></TagCode>
						<TagCode
							name="path"
							props={[
								'd="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"',
								'fill="none"',
								'stroke="currentColor"',
								'stroke-linecap="square"',
								'stroke-miterlimit="10"',
								'stroke-width="2"'
							]}
						></TagCode>
						<TagCode
							name="line"
							props={[
								'x1="12"',
								'y1="22"',
								'x2="12"',
								'y2="18"',
								'fill="none"',
								'stroke="currentColor"',
								'stroke-linecap="square"',
								'stroke-miterlimit="10"',
								'stroke-width="2"'
							]}
						></TagCode>
					</TagCode>
					<TagCode name="span">Home</TagCode>
				</TagCode>
				<TagCode name="button">
					<TagCode
						name="svg"
						props={[
							'class="size-[1.2em]"',
							'xmlns="http://www.w3.org/2000/svg"',
							'viewBox="0 0 24 24"'
						]}
					>
						<TagCode
							name="polyline"
							props={[
								'points="3 14 9 14 9 17 15 17 15 14 21 14"',
								'fill="none"',
								'stroke="currentColor"',
								'stroke-miterlimit="10"',
								'stroke-width="2"'
							]}
						></TagCode>
						<TagCode
							name="rect"
							props={[
								'x="3"',
								'y="3"',
								'width="18"',
								'height="18"',
								'rx="2"',
								'ry="2"',
								'fill="none"',
								'stroke="currentColor"',
								'stroke-linecap="square"',
								'stroke-miterlimit="10"',
								'stroke-width="2"'
							]}
						></TagCode>
					</TagCode>
					<TagCode name="span">Inbox</TagCode>
				</TagCode>
				<TagCode name="button">
					<TagCode
						name="svg"
						props={[
							'class="size-[1.2em]"',
							'xmlns="http://www.w3.org/2000/svg"',
							'viewBox="0 0 24 24"'
						]}
					>
						<TagCode
							name="circle"
							props={[
								'cx="12"',
								'cy="12"',
								'r="3"',
								'fill="none"',
								'stroke="currentColor"',
								'stroke-miterlimit="10"',
								'stroke-width="2"'
							]}
						></TagCode>
						<TagCode
							name="path"
							props={[
								'd="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"',
								'fill="none"',
								'stroke="currentColor"',
								'stroke-linecap="square"',
								'stroke-miterlimit="10"',
								'stroke-width="2"'
							]}
						></TagCode>
					</TagCode>
					<TagCode name="span">Settings</TagCode>
				</TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col gap-4 items-center justify-center">
			{#each colors as color}
				<div class="bg-base-300 rounded-box w-full max-w-sm pt-32">
					<Dock class="relative! border border-base-300" {color}>
						<button>
							<svg class="size-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<polyline
									points="1 11 12 2 23 11"
									fill="none"
									stroke="currentColor"
									stroke-miterlimit="10"
									stroke-width="2"
								>
								</polyline>
								<path
									d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
									fill="none"
									stroke="currentColor"
									stroke-linecap="square"
									stroke-miterlimit="10"
									stroke-width="2"
								>
								</path>
								<line
									x1="12"
									y1="22"
									x2="12"
									y2="18"
									fill="none"
									stroke="currentColor"
									stroke-linecap="square"
									stroke-miterlimit="10"
									stroke-width="2"
								>
								</line>
							</svg>
							<span class="">Home</span>
						</button>
						<button>
							<svg class="size-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt">
									<polyline
										points="3 14 9 14 9 17 15 17 15 14 21 14"
										fill="none"
										stroke="currentColor"
										stroke-miterlimit="10"
										stroke-width="2"
									>
									</polyline>
									<rect
										x="3"
										y="3"
										width="18"
										height="18"
										rx="2"
										ry="2"
										fill="none"
										stroke="currentColor"
										stroke-linecap="square"
										stroke-miterlimit="10"
										stroke-width="2"
									>
									</rect>
								</g>
							</svg>
							<span class="">Inbox</span>
						</button>
						<button>
							<svg class="size-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<circle
									cx="12"
									cy="12"
									r="3"
									fill="none"
									stroke="currentColor"
									stroke-linecap="square"
									stroke-miterlimit="10"
									stroke-width="2"
								>
								</circle>
								<path
									d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
									fill="none"
									stroke="currentColor"
									stroke-linecap="square"
									stroke-miterlimit="10"
									stroke-width="2"
								>
								</path>
							</svg>
							<span class="">Settings</span>
						</button>
					</Dock>
				</div>
			{/each}
		</div>
	</div>
</SampleWrapper>
