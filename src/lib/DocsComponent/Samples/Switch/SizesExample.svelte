<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Switch, Table } from '$lib/index.js';
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
