<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Divider, Switch, Table } from '$lib/index.js';
	let activeTab = 'javascript';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Divider from '{$importDocumentSrc}/Divider.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="Divider" one_line>default</TagCode>
			{#each colors as color}
				<TagCode name="Divider" props={[`color="${color}"`]} one_line>{color}</TagCode>
			{/each}
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<Divider>default</Divider>
			{#each colors as color}
				<Divider {color}>{color}</Divider>
			{/each}
		</SimpleCode>
	</TabItem>
</Tabs>
