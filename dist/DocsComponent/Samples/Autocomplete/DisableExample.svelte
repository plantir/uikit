<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { Autocomplete } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import ArrayCode from '../../ComponentCode/ArrayCode.svelte';

	let items = ['item-1', 'item-2', 'item-3'];
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
		<TagCode
			close_self
			name="Autocomplete"
			props={['label="Default Autocomplete"', '{items}', 'disabled', 'class="w-xs"']}
		/>
	</div>
	<div slot="preview">
		<Autocomplete label="Default Autocomplete" {items} disabled class="w-xs" />
	</div>
</SampleWrapper>
