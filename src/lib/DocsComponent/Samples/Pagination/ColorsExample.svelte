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
	let activeTab = 'javascript';
	let pages: any = [5, 5, 5, 5, 5, 5, 5, 5, 5];
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Pagination from '{$importDocumentSrc}/Pagination.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="Pagination" props={['bind:page', 'lastPage={10}']} close_self />
			{#each colors as color}
				<TagCode
					name="Pagination"
					props={['bind:page', 'lastPage={10}', `color="${color}"`]}
					close_self
				/>
			{/each}
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div class="grid grid-cols-3 gap-4">
				<Pagination bind:page={pages[0]} lastPage={10} />
				{#each colors as color, index}
					<Pagination bind:page={pages[index + 1]} lastPage={10} {color} />
				{/each}
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
