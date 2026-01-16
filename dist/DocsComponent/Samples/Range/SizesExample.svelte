<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Range, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let sizes: any = ['xl','lg', 'md', 'sm', 'xs'];
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Range</span> from '{$importDocumentSrc}/Range.svelte';
		</TagCode>
	</div>
	<div slot="html">
		{#each sizes as size}
			<TagCode name="Range" close_self props={[`label="${size}"`, `size="${size}"`]}></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex flex-col gap-4">
			{#each sizes as size}
				<Range label={size} min="0" {size} />
			{/each}
		</div>
	</div>
</SampleWrapper>
