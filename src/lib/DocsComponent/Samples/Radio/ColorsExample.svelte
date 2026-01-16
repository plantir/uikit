<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
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
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
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
		<TagCode name="div" props={['class="grid grid-cols-4 gap-4"']}>
			{#each colors as color}
				<TagCode name="RadioGroup" props={['value="male"']}>
					<TagCode
						close_self
						name="Radio"
						props={['value="male"', 'label="male"', `color="${color}"`]}
					></TagCode>
					<TagCode
						close_self
						name="Radio"
						props={['value="female"', 'label="female"', `color="${color}"`]}
					></TagCode>
				</TagCode>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			{#each colors as color}
				<RadioGroup value="male">
					<Radio {color} value="male" label="male"></Radio>
					<Radio {color} value="female" label="female"></Radio>
				</RadioGroup>
			{/each}
		</div>
	</div>
</SampleWrapper>
