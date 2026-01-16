<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { Dialog, DialogBody, DialogFooter, DialogHeader } from '../../../index.js';
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
			import DialogHeader from '{$importDocumentSrc}/DialogHeader.svelte';
            import DialogFooter from '{$importDocumentSrc}/DialogFooter.svelte';
            import Button from '{$importDocumentSrc}/Button.svelte';
			
			let open = false;
			function openDialog() {'{'}
				open = true;
			{'}'};
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="Button" one_line props={['on:click={openDialog}']}>Open Dialog</TagCode>
		<TagCode name="Dialog" props={['bind:open']}>
            <TagCode name="DialogHeader" props={['title="Are you sure?"']} />
			<TagCode name="DialogBody">
				Do you want to delete these items?
			</TagCode>
            <TagCode name="DialogFooter">
                <TagCode name="Button">
                    Cancel
                </TagCode>
                <TagCode name="Button" props={['color="error"']}>
                    Delete
                </TagCode>
            </TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Button on:click={openDialog}>Open Dialog</Button>
		<Dialog bind:open>
            <DialogHeader title="Are you sure?"/>
			<DialogBody>
                Do you want to delete these items?
            </DialogBody>
            <DialogFooter>
                <Button>Cancel</Button>
                <Button color="error">Delete</Button>
            </DialogFooter>
		</Dialog>
	</div>
</SampleWrapper>
