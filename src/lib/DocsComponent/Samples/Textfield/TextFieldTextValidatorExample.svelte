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
	let value = '';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">TextField</span> from '{$importDocumentSrc}/TextField.svelte';
			<br />
			<LetCode name="value" value="" />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode
			name="TextField"
			props={['label="Username"', 'bind:value', 'placeholder="enter your username"']}
		></TagCode>
	</div>
	<div slot="preview">
		<TextField
			label="Username"
			pattern="[A-Za-z][A-Za-z0-9\-]*"
			minlength="5"
			maxlength="30"
			required
			bind:value
			hint="Must be 5 to 30 characters
  <br />containing only letters, numbers or dash"
			placeholder="enter your username"
		/>
	</div>
</SampleWrapper>
