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
	let activeTab = 'javascript';
	let form: any = {};
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Switch from '{$importDocumentSrc}/Switch.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="div">
				<TagCode name="Switch" one_line props={['label="do you like sports ?"', 'bind:value={form.sport}','size="xs"']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode name="Switch" one_line props={['label="do you like sleep ?"', 'bind:value={form.sleep}','size="sm"']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode name="Switch" one_line props={['label="do you like games ?"', 'bind:value={form.games}','size="md"']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode name="Switch" one_line props={['label="do you like sea ?"', 'bind:value={form.sea}','size="lg"']}
				></TagCode>
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div>
				<Switch label="do you like sports ?" bind:value={form.sport} size="xs" />
			</div>
			<div>
				<Switch label="do you like sleep ?" bind:value={form.sleep} size="sm" />
			</div>
			<div>
				<Switch label="do you like games ?" bind:value={form.games} size="md" />
			</div>
			<div>
				<Switch label="do you like sea ?" bind:value={form.sea} size="lg" />
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
