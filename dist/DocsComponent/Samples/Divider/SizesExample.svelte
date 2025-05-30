<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Divider, Switch, Table } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let sizes: any = ['lg', 'md', 'sm', 'xs'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Divider from '{$importDocumentSrc}/Divider.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		{#each sizes as size}
			<TagCode name="Divider" props={[`size="${size}"`]} one_line>{size}</TagCode>
		{/each}
	</div>
	<div slot="preview">
		{#each sizes as size}
			<Divider {size}>{size}</Divider>
		{/each}
	</div>
</SampleWrapper>
