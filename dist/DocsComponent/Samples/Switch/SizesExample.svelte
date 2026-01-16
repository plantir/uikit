<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	import SampleWrapper from '../SampleWrapper.svelte';
	let sizes: any = ['xl', 'lg', 'md', 'sm', 'xs'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Switch</span> from '{$importDocumentSrc}/Switch.svelte';
			<br />
		</TagCode>
	</div>
	<div slot="html">
		{#each sizes as size}
			<TagCode name="div">
				<TagCode name="Switch" one_line props={['label="do you like sports ?"', `size="${size}"`]}
				></TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex flex-col gap-4">
			{#each sizes as size}
				<div>
					<Switch label="do you like sports ?" {size} />
				</div>
			{/each}
		</div>
	</div>
</SampleWrapper>
