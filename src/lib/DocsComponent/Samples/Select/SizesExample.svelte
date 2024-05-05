<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Select, Switch, Table } from '$lib/index.js';
	let activeTab = 'javascript';
	let form: any = {};
	let items = ['item-1', 'item-2', 'item-3'];
	let value = '';
	let sizes: any = ['lg', 'md', 'sm', 'xs'];
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Select from '{$importDocumentSrc}/Select.svelte';
				let items = ['item-1', 'item-2', 'item-3'];
				let value = '';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="div" props={['class="grid grid-cols-4 gap-4"']}>
				{#each sizes as size}
					<TagCode
						close_self
						name="Select"
						props={['label="Default Select"', '{items}', `size="${size}""`]}
					/>
				{/each}
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div class="grid grid-cols-4 gap-4">
				{#each sizes as size}
					<Select bind:value label="Default Select" {items} {size} />
				{/each}
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
