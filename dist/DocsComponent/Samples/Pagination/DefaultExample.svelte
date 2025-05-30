<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Pagination, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let page: any = 5;
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Pagination from '{$importDocumentSrc}/Pagination.svelte';
				let page = 5;
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="Pagination" props={['bind:page', 'lastPage={10}']} close_self />
	</div>
	<div slot="preview">
		<Pagination bind:page lastPage={10} />
	</div>
</SampleWrapper>
