<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Checkbox, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let sizes: any = ['xl', 'lg', 'md', 'sm', 'xs'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Checkbox</span> from '{$importDocumentSrc}/Checkbox.svelte';
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="grid grid-cols-5 gap-4"']}>
			{#each sizes as size}
				<TagCode name="Checkbox" close_self props={[`size="${size}`, `label="${size}"`]}></TagCode>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="grid grid-cols-5 gap-4">
			{#each sizes as size}
				<Checkbox {size} label={size} />
			{/each}
		</div>
	</div>
</SampleWrapper>
