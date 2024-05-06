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
	let activeTab = 'Preview';
	let form: any = {};
	let items = ['item-1', 'item-2', 'item-3'];
	let value = '';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Select from '{$importDocumentSrc}/Select.svelte';
				let items = ['item-1', 'item-2', 'item-3'];
				let value = '';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode close_self name="Select" props={['label="Default Select"', '{items}', 'bind:value']} />
		<TagCode one_line name="span" props={['class="pl-4"']}>value : {'{'}value{'}'}</TagCode>
	</div>
	<div slot="preview">
		<Select bind:value label="Default Select" {items} />
		<span class="pl-4">
			value : {value}
		</span>
	</div>
</SampleWrapper>
