<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Range, Switch, Table } from '../../../index.js';
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
