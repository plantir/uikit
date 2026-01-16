<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Alert</span> from '{$importDocumentSrc}/Alert.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Alert">
			<TagCode
				name="svg"
				props={[
					'xmlns="http://www.w3.org/2000/svg"',
					'fill="none"',
					'viewBox="0 0 24 24"',
					'class="stroke-info h-6 w-6 shrink-0"'
				]}
			>
				<TagCode
					name="path"
					props={[
						'stroke-linecap="round"',
						'stroke-linejoin="round"',
						'stroke-width="2"',
						'd="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"'
					]}
				></TagCode>
			</TagCode>
			<TagCode name="span">12 unread messages. Tap to see.</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<Alert>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-info h-6 w-6 shrink-0"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<span>12 unread messages. Tap to see.</span>
		</Alert>
	</div>
</SampleWrapper>
