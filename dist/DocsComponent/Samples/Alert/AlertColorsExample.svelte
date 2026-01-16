<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Alert from '../../../components/Alert/Alert.svelte';
	import type { AlertColor } from '../../../components/Alert/Alert.type.js';
	let colors: AlertColor[] = ['warning', 'info', 'error', 'success'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Alert</span> from '{$importDocumentSrc}/Alert.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="Alert" props={[`color="${color}"`]}>
				<TagCode
					name="svg"
					props={[
						'xmlns="http://www.w3.org/2000/svg"',
						'fill="none"',
						'viewBox="0 0 24 24"',
						'class="h-6 w-6 shrink-0"'
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
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex gap-4 flex-col">
			{#each colors as color}
				<Alert {color}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="stroke-current h-6 w-6 shrink-0"
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
			{/each}
		</div>
	</div>
</SampleWrapper>
