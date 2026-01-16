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
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="ColorPicker" close_self props={['disabled']} />
	</div>
	<div slot="preview">
		<ColorPicker disabled />
	</div>
</SampleWrapper>
