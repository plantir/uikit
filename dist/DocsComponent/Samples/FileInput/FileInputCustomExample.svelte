<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '../../../components/RadialProgress/RadialProgress.svelte';
	import Skeleton from '../../../components/Skeleton/Skeleton.svelte';
	import Toast from '../../../components/Toast/Toast.svelte';
	import Alert from '../../../components/Alert/Alert.svelte';
	import Button from '../../../components/Button/Button.svelte';
	import Fieldset from '../../../components/Fieldset/Fieldset.svelte';
	import TextField from '../../../components/TextField/TextField.svelte';
	import FileInput from '../../../components/FileInput/FileInput.svelte';
	import LetCode from '../../ComponentCode/LetCode.svelte';
	let value = $state();
	$effect(() => {
		console.log(value, 'val');
	});
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">FileInput</span> from '{$importDocumentSrc}/FileInput.svelte';
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
			<br />
			<LetCode name="value" value="" />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode
			name="FileInput"
			
			props={['custom', 'class="w-xs border flex flex-col justify-center border-primary gap-4 items-center border-dashed p-4 rounded-box"', 'bind:value']}
		>
		<TagCode name="div">please select a file to upload</TagCode>
		<TagCode name="Button" props={['color="primary"']}>Upload file</TagCode>
	</TagCode>
	</div>
	<div slot="preview">
		<FileInput custom class="w-xs border flex flex-col justify-center border-primary gap-4 items-center border-dashed p-4 rounded-box" bind:value>
			<div>please select a file to upload</div>
			<Button color="primary">Upload file</Button>
		</FileInput>
	</div>
</SampleWrapper>
