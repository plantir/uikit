<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import Checkbox from '../../../components/Checkbox/Checkbox.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Checkbox from '{$importDocumentSrc}/Checkbox.svelte';
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="div" props={['class="grid grid-cols-4 gap-4"']}>
			<TagCode name="Checkbox" props={['label="default"']} close_self></TagCode>
			{#each colors as color}
				<TagCode name="Checkbox" props={[`label="${color}"`, `color="${color}"`]} close_self
				></TagCode>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="grid grid-cols-4 gap-4">
			<Checkbox label="default" />
			{#each colors as color}
				<Checkbox label="default" {color} />
			{/each}
		</div>
	</div>
</SampleWrapper>
