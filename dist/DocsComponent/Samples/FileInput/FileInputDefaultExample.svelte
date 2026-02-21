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
	let value = $state('');
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
		<TagCode
			name="FileInput"
			close_self
			props={['label="File input"', 'class="w-xs"', 'bind:value', 'placeholder="select file"']}
		></TagCode>
	</div>
	<div slot="preview">
		<FileInput label="File input" class="w-xs" bind:value placeholder="select file" />
	</div>
</SampleWrapper>
