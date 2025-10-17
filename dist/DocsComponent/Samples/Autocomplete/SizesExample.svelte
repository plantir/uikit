<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { Autocomplete } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import ArrayCode from '../../ComponentCode/ArrayCode.svelte';

	let items = ['item-1', 'item-2', 'item-3'];
	let value = '';
	let sizes: any = ['xl', 'lg', 'md', 'sm', 'xs'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Autocomplete</span> from '{$importDocumentSrc}/Autocomplete.svelte';
			<br />
			<ArrayCode name="items" {items} />
			<br />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex flex-col gap-4"']}>
			{#each sizes as size}
				<TagCode
					close_self
					name="Autocomplete"
					props={[`label="${size} Autocomplete"`, '{items}', `size="${size}"`, 'class="w-xs"']}
				/>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-col gap-4">
			{#each sizes as size}
				<Autocomplete bind:value label="{size} Autocomplete" {items} {size} class="w-xs" />
			{/each}
		</div>
	</div>
</SampleWrapper>
