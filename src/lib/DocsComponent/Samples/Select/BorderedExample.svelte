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
	let value2 = '';
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Select from '{$importDocumentSrc}/Select.svelte';
				let items = ['item-1', 'item-2', 'item-3'];
				let value = '';
				let value2 = '';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode
				close_self
				name="Select"
				props={['label="Default Select"', '{items}', 'bind:value', 'bordered={false}']}
			/>
			<TagCode one_line name="span" props={['class="pl-4"']}>value : {'{'}value{'}'}</TagCode>
			<TagCode
				close_self
				name="Select"
				props={['label="Default Select"', '{items}', 'bind:value={value2}', 'bordered']}
			/>
			<TagCode one_line name="span" props={['class="pl-4"']}>value : {'{'}value{'}'}</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<Select bind:value label="Default Select" {items} bordered={false} />
			<span class="pl-4">
				value : {value}
			</span>
			<Select bind:value={value2} label="Default Select" {items} bordered />
			<span class="pl-4">
				value : {value2}
			</span>
		</SimpleCode>
	</TabItem>
</Tabs>
