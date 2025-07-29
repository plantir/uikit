<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import Kbd from '$lib/components/Kbd/Kbd.svelte';
	let value = '';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">TextField</span> from '{$importDocumentSrc}/TextField.svelte';
			import <span class="text-green-600">Kbd</span> from '{$importDocumentSrc}/Kbd.svelte';
			<br />
			<LetCode name="value" value="" />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode
			name="TextField"
			props={['label="Username"', 'bind:value', 'placeholder="enter your username"']}
		>
			<TagCode name="div" props={['slot="start"']}>
				<TagCode
					name="svg"
					props={[
						'class="w-6 h-6"',
						'aria-hidden="true"',
						'xmlns="http://www.w3.org/2000/svg"',
						'width="24"',
						'height="24"',
						'fill="currentColor"',
						'viewBox="0 0 24 24"'
					]}
				>
					<TagCode
						name="path"
						props={[
							'fill-rule="evenodd"',
							'd="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"',
							'clip-rule="evenodd"',
							'fill="currentColor"'
						]}
					></TagCode>
				</TagCode>
			</TagCode>
			<TagCode name="div" props={['slot="end"']}>
				<TagCode name="Kbd">K</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<TextField label="Username" bind:value placeholder="enter your username">
			<div slot="start">
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
						clip-rule="evenodd"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div slot="end">
				<Kbd>K</Kbd>
			</div>
		</TextField>
	</div>
</SampleWrapper>
