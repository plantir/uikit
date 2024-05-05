<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Steps, Switch, Table } from '$lib/index.js';
	let activeTab = 'javascript';
	let form: any = {};
	let items = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];
	let selected = 'step-1';
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Steps from '{$importDocumentSrc}/Steps.svelte';
				let items = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];
				let selected = 'step-1';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode
				name="Steps"
				close_self
				props={['{items}', 'bind:selected', 'color="primary"', `vertical`]}
			/>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<Steps {items} bind:selected color="primary" vertical />
		</SimpleCode>
	</TabItem>
</Tabs>
