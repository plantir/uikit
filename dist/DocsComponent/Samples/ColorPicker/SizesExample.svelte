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
	let sizes: any = ['lg', 'md', 'sm', 'xs'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import ColorPicker from '{$importDocumentSrc}/ColorPicker.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex flex-wrap gap-2 md:gap-4"']}>
			{#each sizes as size}
				<TagCode name="ColorPicker" close_self props={[`size="${size}"`]} />
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-2 md:gap-4">
			{#each sizes as size}
				<ColorPicker {size} />
			{/each}
		</div>
	</div>
</SampleWrapper>
