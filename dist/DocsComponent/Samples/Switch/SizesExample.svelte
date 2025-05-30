<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Switch from '{$importDocumentSrc}/Switch.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like sports ?"', 'bind:value={form.sport}', 'size="xs"']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like sleep ?"', 'bind:value={form.sleep}', 'size="sm"']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like games ?"', 'bind:value={form.games}', 'size="md"']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like sea ?"', 'bind:value={form.sea}', 'size="lg"']}
			></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div>
			<Switch label="do you like sports ?" bind:value={form.sport} size="xs" />
		</div>
		<div>
			<Switch label="do you like sleep ?" bind:value={form.sleep} size="sm" />
		</div>
		<div>
			<Switch label="do you like games ?" bind:value={form.games} size="md" />
		</div>
		<div>
			<Switch label="do you like sea ?" bind:value={form.sea} size="lg" />
		</div>
	</div>
</SampleWrapper>
