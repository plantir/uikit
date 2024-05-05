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
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Select from '{$importDocumentSrc}/Select.svelte';
				let items = ['item-1', 'item-2', 'item-3'];
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex flex-wrap gap-4"']}>
			{#each colors as color}
				<TagCode
					close_self
					name="Select"
					props={['label="Default Select"', '{items}', `color="${color}"`]}
				/>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			{#each colors as color}
				<Select label="Default Select" {items} {color} />
			{/each}
		</div>
	</div>
</SampleWrapper>
