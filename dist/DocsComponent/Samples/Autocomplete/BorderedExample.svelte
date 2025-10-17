<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { Autocomplete } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import ArrayCode from '../../ComponentCode/ArrayCode.svelte';

	let items = ['item-1', 'item-2', 'item-3'];
	let value = '';
	let value2 = '';
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
		<TagCode
			close_self
			name="Autocomplete"
			props={['label="Default Autocomplete"', '{items}', 'bind:value', 'bordered={false}']}
		/>
		<TagCode one_line name="span" props={['class="pl-4"']}>value : {'{'}value{'}'}</TagCode>
		<TagCode
			close_self
			name="Autocomplete"
			props={['label="Default Autocomplete"', '{items}', 'bind:value={value2}', 'bordered']}
		/>
		<TagCode one_line name="span" props={['class="pl-4"']}>value : {'{'}value{'}'}</TagCode>
	</div>
	<div slot="preview">
		<Autocomplete bind:value label="Default Autocomplete" {items} bordered={false} />
		<span class="pl-4">
			value : {value}
		</span>
		<Autocomplete bind:value={value2} label="Default Autocomplete" {items} bordered />
		<span class="pl-4">
			value : {value2}
		</span>
	</div>
</SampleWrapper>
