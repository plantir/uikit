<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Range, Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let value = '';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Range from '{$importDocumentSrc}/Range.svelte';
				let value = '';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode
			name="Range"
			close_self
			props={['label="Min And Max Range"', 'bind:value', 'min="20"', 'max="50"']}
		></TagCode>
		<TagCode name="div">
			number is : {'{'}value{'}'}
		</TagCode>
	</div>
	<div slot="preview">
		<Range label="Min And Max Range" min="20" max="50" bind:value />
		<div>
			number is : {value}
		</div>
	</div>
</SampleWrapper>
