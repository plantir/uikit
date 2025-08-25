<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Steps, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let items = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];
	let selected = 'step-1';
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	import SampleWrapper from '../SampleWrapper.svelte';
	import ArrayCode from '../../ComponentCode/ArrayCode.svelte';
	import LetCode from '../../ComponentCode/LetCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import Steps from '{$importDocumentSrc}/Steps.svelte';
			<br />
			<ArrayCode name="items" {items} />
			<LetCode name="selected" value="step-1" />
		</TagCode>
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="Steps" close_self props={['{items}', 'bind:selected', `color="${color}"`]} />
		{/each}
	</div>
	<div slot="preview">
		{#each colors as color}
			<Steps {items} bind:selected {color} />
		{/each}
	</div>
</SampleWrapper>
