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
	import Badge from '$lib/components/Badge/Badge.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalSize } from '$lib/utils/El.types.js';
	let activeTab = 'Preview';
	let form: any = {};
	let sizes: GlobalSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Badge</span> from '{$importDocumentSrc}/Badge.svelte';
		</TagCode>
	</div>
	<div slot="html">
		{#each sizes as size}
			<TagCode name="Badge" props={[`size="${size}"`]} one_line>
				{size} badge
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex gap-4 flex-wrap">
			{#each sizes as size}
				<Badge {size}>{size} badge</Badge>
			{/each}
		</div>
	</div>
</SampleWrapper>
