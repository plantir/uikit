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
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Steps from '{$importDocumentSrc}/Steps.svelte';
				let items = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];
				let selected = 'step-1';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="Steps" close_self props={['{items}', 'bind:selected', 'color="primary"']} />
	</div>
	<div slot="preview">
		<Steps {items} bind:selected color="primary" />
	</div>
</SampleWrapper>
