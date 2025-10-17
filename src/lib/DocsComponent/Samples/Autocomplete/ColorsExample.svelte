<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { Autocomplete } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import ArrayCode from '$lib/DocsComponent/ComponentCode/ArrayCode.svelte';

	let items = [
		{
			title: 'item 1 text',
			value: 'value_1'
		},
		{
			title: 'item 2 text',
			value: 'value_2'
		},
		{
			title: 'item 3 text',
			value: 'value_3'
		}
	];

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
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Autocomplete</span> from '{$importDocumentSrc}/Autocomplete.svelte';
			<br />
			<ArrayCode name="items" {items} />
			<br />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex flex-col flex-wrap gap-4"']}>
			{#each colors as color}
				<TagCode
					close_self
					name="Autocomplete"
					props={[`oncreated={(v) => {items = [...items, v]}}`, `create`, `dismissible`, `label="${color} Autocomplete"`, '{items}', `color="${color}"`, 'class="w-xs"']}
				/>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-col flex-wrap gap-4">
			{#each colors as color}
				<Autocomplete oncreated={(v) => {items = [...items, v]}} create dismissible label="{color} Autocomplete" {items} {color} class="w-xs" />
			{/each}
		</div>
	</div>
</SampleWrapper>
