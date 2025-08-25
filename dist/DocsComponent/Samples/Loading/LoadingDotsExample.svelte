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
				<TagCode name="Loading" props={[`size="${size}"`, 'type="dots"']} close_self />
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center gap-4">
			{#each sizes as size, index}
				<Loading {size} type="dots" />
			{/each}
		</div>
	</div>
</SampleWrapper>
