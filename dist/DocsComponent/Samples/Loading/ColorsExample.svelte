<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Loading, Pagination, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Loading from '{$importDocumentSrc}/Loading.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="Loading" close_self />
		{#each colors as color}
			<TagCode name="Loading" props={[`color="${color}"`]} close_self />
		{/each}
	</div>
	<div slot="preview">
		<div class="grid grid-cols-3 gap-4">
			<Loading />
			{#each colors as color, index}
				<Loading {color} />
			{/each}
		</div>
	</div>
</SampleWrapper>
