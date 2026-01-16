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
	let pages: any = [5, 5, 5, 5, 5, 5, 5, 5, 5];
	let sizes: any = ['lg', 'md', 'sm', 'xs'];
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
		<TagCode name="div" props={['class="grid grid-cols-1 gap-4"']}>
			{#each sizes as size}
				<TagCode name="Loading" props={[`size="${size}"`]} close_self />
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="grid grid-cols-1 gap-4">
			{#each sizes as size, index}
				<Loading {size} />
			{/each}
		</div>
	</div>
</SampleWrapper>
