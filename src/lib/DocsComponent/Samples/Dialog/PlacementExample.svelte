<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { Dialog, DialogBody } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';

	let bottom_open = false;
	function openBottom() {
		bottom_open = true;
	}
	let top_open = false;
	function openTop() {
		top_open = true;
	}
	let middle_open = false;
	function openMiddle() {
		middle_open = true;
	}
	let start_open = false;
	function openStart() {
		start_open = true;
	}
	let end_open = false;
	function openEnd() {
		end_open = true;
	}
	let test = false;
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Dialog from '{$importDocumentSrc}/Dialog.svelte';
			import DialogBody from '{$importDocumentSrc}/DialogBody.svelte';
			let bottom_open = false;
			function openBottom() {'{'}
			bottom_open = true;
			{'}'}
			let top_open = false;
			function openTop() {'{'}
			top_open = true;
			{'}'}
			let middle_open = false;
			function openMiddle() {'{'}
				middle_open = true;
			{'}'}
			let start_open = false;
			function openStart() {'{'}
				start_open = true;
			{'}'}
			let end_open = false;
			function openEnd() {'{'}
				end_open = true;
			{'}'}
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="Button" one_line props={['on:click={openBottom}']}>Open Bottom Dialog</TagCode>
		<TagCode name="Dialog" props={['bind:open={bottom_open}', 'placement="bottom"']}>
			<TagCode name="DialogBody">content of inside Dialog</TagCode>
		</TagCode>
		<TagCode name="Button" one_line props={['on:click={openTop}']}>Open Top Dialog</TagCode>
		<TagCode name="Dialog" props={['bind:open={top_open}', 'placement="top"']}>
			<TagCode name="DialogBody">content of inside Dialog</TagCode>
		</TagCode>
		<TagCode name="Button" one_line props={['on:click={openMiddle}']}>Open Middle Dialog</TagCode>
		<TagCode name="Dialog" props={['bind:open={middle_open}', 'placement="middle"']}>
			<TagCode name="DialogBody">content of inside Dialog</TagCode>
		</TagCode>
		<TagCode name="Button" one_line props={['on:click={openStart}']}>Open Start Dialog</TagCode>
		<TagCode name="Dialog" props={['bind:open={start_open}', 'placement="start"']}>
			<TagCode name="DialogBody">content of inside Dialog</TagCode>
		</TagCode>
		<TagCode name="Button" one_line props={['on:click={openEnd}']}>Open End Dialog</TagCode>
		<TagCode name="Dialog" props={['bind:open={end_open}', 'placement="end"']}>
			<TagCode name="DialogBody">content of inside Dialog</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-2">
			<Button on:click={openBottom}>Open Bottom Dialog</Button>
			<Dialog bind:open={bottom_open} placement="bottom">
				<DialogBody>
					<div>content of inside Dialog</div>
				</DialogBody>
			</Dialog>
			<Button on:click={openTop}>Open Top Dialog</Button>
			<Dialog bind:open={top_open} placement="top">
				<DialogBody>
					<div>content of inside Dialog</div>
				</DialogBody>
			</Dialog>
			<Button on:click={openMiddle}>Open Middle Dialog</Button>
			<Dialog bind:open={middle_open} placement="middle">
				<DialogBody>
					<div>content of inside Dialog</div>
				</DialogBody>
			</Dialog>
			<Button on:click={openStart}>Open Start Dialog</Button>
			<Dialog bind:open={start_open} placement="start">
				<DialogBody>
					<div>content of inside Dialog</div>
				</DialogBody>
			</Dialog>
			<Button on:click={openEnd}>Open End Dialog</Button>
			<Dialog bind:open={end_open} placement="end">
				<DialogBody>
					<div>content of inside Dialog</div>
				</DialogBody>
			</Dialog>
		</div>
	</div>
</SampleWrapper>
