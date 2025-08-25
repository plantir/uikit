<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = [
		'primary',
		'secondary',
		'accent',
		'success',
		'warning',
		'info',
		'error',
		'neutral'
	];
	let value: any;
	let checked = true;
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Badge</span> from '{$importDocumentSrc}/Badge.svelte';
		</TagCode>
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="Badge" props={[`color="${color}"`]} one_line>
				{color}
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex gap-4 flex-wrap">
			{#each colors as color}
				<Badge {color}>{color}</Badge>
			{/each}
		</div>
	</div>
</SampleWrapper>
