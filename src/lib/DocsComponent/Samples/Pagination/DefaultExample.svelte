<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Pagination, Switch, Table } from '$lib/index.js';
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
