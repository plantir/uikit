<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Loading, Pagination, Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
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
		<TagCode name="div" props={['class="flex items-center justify-center h-[200px]"']}>
			<TagCode name="Loading" close_self />
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center justify-center h-[200px]">
			<Loading />
		</div>
	</div>
</SampleWrapper>
