<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let sizes: any = ['xl', 'lg', 'md', 'sm', 'xs'];
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Radio</span> from '{$importDocumentSrc}/Radio.svelte';
			import <span class="text-green-600">RadioGroup</span> from '{$importDocumentSrc}/RadioGroup.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex items-center flex-wrap gap-4"']}>
			{#each sizes as size}
				<TagCode name="RadioGroup">
					<TagCode
						close_self
						name="Radio"
						props={['value="male"', `label="${size}"`, `size="${size}"`]}
					></TagCode>
					<TagCode
						close_self
						name="Radio"
						props={['value="female"', `label="${size}"`, `size="${size}"`]}
					></TagCode>
				</TagCode>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex items-center flex-wrap gap-4">
			{#each sizes as size}
				<RadioGroup value="male">
					<Radio {size} value="male" label={size}></Radio>
					<Radio {size} value="female" label={size}></Radio>
				</RadioGroup>
			{/each}
		</div>
	</div>
</SampleWrapper>
