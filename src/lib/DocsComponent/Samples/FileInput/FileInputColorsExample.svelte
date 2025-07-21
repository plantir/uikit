<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '$lib/components/RadialProgress/RadialProgress.svelte';
	import Skeleton from '$lib/components/Skeleton/Skeleton.svelte';
	import Toast from '$lib/components/Toast/Toast.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Fieldset from '$lib/components/Fieldset/Fieldset.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import FileInput from '$lib/components/FileInput/FileInput.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import type { GlobalColor, GlobalSize } from '$lib/utils/El.types.js';
	let value = $state();
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
	$effect(() => {
		console.log(value, 'val');
	});
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">FileInput</span> from '{$importDocumentSrc}/FileInput.svelte';
			<br />
			<LetCode name="value" value="" />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode
				name="FileInput"
				close_self
				props={[
					'label="File input"',
					'class="w-xs"',
					'bind:value',
					'placeholder="select file"',
					`color="${color}"`
				]}
			></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex flex-col gap-4">
			{#each colors as color}
				<FileInput label="File input" {color} class="w-xs" bind:value placeholder="select file" />
			{/each}
		</div>
	</div>
</SampleWrapper>
