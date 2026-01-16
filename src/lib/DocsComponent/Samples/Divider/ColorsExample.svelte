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
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalColor } from '$lib/utils/El.types.js';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: GlobalColor[] = [
		'primary',
		'secondary',
		'accent',
		'success',
		'warning',
		'info',
		'error',
		'neutral'	
	];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Divider</span> from '{$importDocumentSrc}/Divider.svelte';
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="Divider" one_line>default</TagCode>
		{#each colors as color}
			<TagCode name="Divider" props={[`color="${color}"`]} one_line>{color}</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		{#each colors as color}
			<Divider {color}>{color}</Divider>
		{/each}
	</div>
</SampleWrapper>
