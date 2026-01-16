<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { Dialog, DialogBody } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	
	let open = false;
	function openDialog() {
		open = true;
	}
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Dialog from '{$importDocumentSrc}/Dialog.svelte';
			import DialogBody from '{$importDocumentSrc}/DialogBody.svelte';
			let open = false;
			function openDialog() {'{'}
				open = true;
			{'}'};
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="Button" one_line props={['on:click={openDialog}']}>Open Dialog</TagCode>
		<TagCode name="Dialog" props={['bind:open']}>
			<TagCode name="DialogBody">
				content of inside Dialog
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Button on:click={openDialog}>Open Dialog</Button>
		<Dialog bind:open>
			<DialogBody>
				<div>content of inside Dialog</div>
			</DialogBody>
		</Dialog>
	</div>
</SampleWrapper>
