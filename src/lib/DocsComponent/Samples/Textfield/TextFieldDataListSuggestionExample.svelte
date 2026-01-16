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
	import ArrayCode from '$lib/DocsComponent/ComponentCode/ArrayCode.svelte';
	let value = '';
	let suggestions = ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">TextField</span> from '{$importDocumentSrc}/TextField.svelte';
			<br />
			<ArrayCode name="suggestions" items={suggestions} />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode
			name="TextField"
			props={[
				'label="Browser"',
				'bind:value',
				'placeholder="Which browser do you use"',
				`suggestions={suggestions}`
			]}
		></TagCode>
	</div>
	<div slot="preview">
		<TextField label="Browser" bind:value placeholder="Which browser do you use" {suggestions} />
	</div>
</SampleWrapper>
