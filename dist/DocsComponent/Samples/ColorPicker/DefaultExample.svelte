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
	import ColorPicker from '../../../components/ColorPicker/ColorPicker.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Switch from '{$importDocumentSrc}/Switch.svelte';
				let form={'{'}{'}'};
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like sports ?"', 'bind:value={form.sport}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like sleep ?"', 'bind:value={form.sleep}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like games ?"', 'bind:value={form.games}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode name="Switch" one_line props={['label="do you like sea ?"', 'bind:value={form.sea}']}
			></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<ColorPicker label="pick a color" />
	</div>
</SampleWrapper>
