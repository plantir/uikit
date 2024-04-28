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
				<TagCode
					name="Switch"
					one_line
					props={['label="primary"', 'colors="primary"', 'value={true}']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode
					name="Switch"
					one_line
					props={['label="secondary"', 'colors="secondary"', 'value={true}']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode
					name="Switch"
					one_line
					props={['label="accent"', 'colors="accent"', 'value={true}']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode name="Switch" one_line props={['label="error"', 'colors="error"', 'value={true}']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode name="Switch" one_line props={['label="info"', 'colors="info"', 'value={true}']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode
					name="Switch"
					one_line
					props={['label="natural"', 'colors="natural"', 'value={true}']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode
					name="Switch"
					one_line
					props={['label="success"', 'colors="success"', 'value={true}']}
				></TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode
					name="Switch"
					one_line
					props={['label="warning"', 'colors="warning"', 'value={true}']}
				></TagCode>
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div>
				<Switch label="primary" color="primary" value={true} />
			</div>
			<div>
				<Switch label="secondary" color="secondary" value={true} />
			</div>
			<div>
				<Switch label="accent" color="accent" value={true} />
			</div>
			<div>
				<Switch label="error" color="error" value={true} />
			</div>
			<div>
				<Switch label="info" color="info" value={true} />
			</div>
			<div>
				<Switch label="natural" color="natural" value={true} />
			</div>
			<div>
				<Switch label="success" color="success" value={true} />
			</div>
			<div>
				<Switch label="warning" color="warning" value={true} />
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
