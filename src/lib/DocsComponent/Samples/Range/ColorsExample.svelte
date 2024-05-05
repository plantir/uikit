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
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Range from '{$importDocumentSrc}/Range.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="Range" close_self props={['label="default"']}></TagCode>
		{#each colors as color}
			<TagCode name="Range" close_self props={[`label="${color}"`, `color="${color}"`]}></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<Range label="default" min="0" />
		{#each colors as color}
			<Range label={color} min="0" {color} />
		{/each}
	</div>
</SampleWrapper>
