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
	let pages: any = [5, 5, 5, 5, 5, 5, 5, 5, 5];
	let sizes: any = ['xl', 'lg', 'md', 'sm', 'xs'];
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Loading</span> from '{$importDocumentSrc}/Loading.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex items-center gap-4"']}>
			{#each sizes as size}
				<TagCode name="Loading" props={[`size="${size}"`, 'type="infinity"']} close_self />
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center gap-4">
			{#each sizes as size, index}
				<Loading {size} type="infinity" />
			{/each}
		</div>
	</div>
</SampleWrapper>
