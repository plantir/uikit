<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { Dialog, DialogBody } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import FunctionCode from '$lib/DocsComponent/ComponentCode/FunctionCode.svelte';

	let open = false;
	function openDialog() {
		open = true;
	}
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Dialog</span> from '{$importDocumentSrc}/Dialog.svelte';
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
			<br />
			<LetCode name="open" value={false}></LetCode>
			<FunctionCode name="openDrawer">
				<span class="text-green-500">open</span> = <span class="text-red-600">true</span>;
			</FunctionCode>
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Button" one_line props={['on:click={openDialog}']}>Open Dialog</TagCode>
		<TagCode name="Dialog" props={['bind:open']}>
			<TagCode name="div">content of inside Dialog</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Button on:click={openDialog}>Open Dialog</Button>
		<Dialog bind:open>
			<div>content of inside Dialog</div>
		</Dialog>
	</div>
</SampleWrapper>
