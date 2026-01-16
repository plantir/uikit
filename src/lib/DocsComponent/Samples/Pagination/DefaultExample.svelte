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
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Pagination</span> from '{$importDocumentSrc}/Pagination.svelte';
			<br />
			<LetCode name="page" value="5" />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Pagination" props={['bind:page', 'lastPage={10}']} close_self />
	</div>
	<div slot="preview">
		<Pagination bind:page lastPage={10} />
	</div>
</SampleWrapper>
