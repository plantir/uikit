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
	import ArrayCode from '$lib/DocsComponent/ComponentCode/ArrayCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Select</span> from '{$importDocumentSrc}/Select.svelte';
			<br />
			<ArrayCode name="items" {items} />
			<br />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode
			close_self
			name="Select"
			props={['label="Default Select"', '{items}', 'disabled', 'class="w-xs"']}
		/>
	</div>
	<div slot="preview">
		<Select label="Default Select" {items} disabled class="w-xs" />
	</div>
</SampleWrapper>
