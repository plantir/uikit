<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import Badge from '../../../components/Badge/Badge.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalSize } from '../../../utils/El.types.js';
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
