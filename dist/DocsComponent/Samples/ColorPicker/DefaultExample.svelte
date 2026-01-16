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
		<TagCode name="script">
			import <span class="text-green-600">ColorPicker</span> from '{$importDocumentSrc}/ColorPicker.svelte';
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="ColorPicker" one_line props={['label="pick a color"']} />
	</div>
	<div slot="preview">
		<ColorPicker label="pick a color" />
	</div>
</SampleWrapper>
