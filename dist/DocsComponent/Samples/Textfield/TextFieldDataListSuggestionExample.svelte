<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import TextField from '../../../components/TextField/TextField.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '../../ComponentCode/LetCode.svelte';
	import ArrayCode from '../../ComponentCode/ArrayCode.svelte';
	let value = '';
	let suggestions = ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">TextField</span> from '{$importDocumentSrc}/TextField.svelte';
			<br />
			<ArrayCode name="suggestions" items={suggestions} />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode
			name="TextField"
			props={[
				'label="Browser"',
				'bind:value',
				'placeholder="Which browser do you use"',
				`suggestions={suggestions}`
			]}
		></TagCode>
	</div>
	<div slot="preview">
		<TextField label="Browser" bind:value placeholder="Which browser do you use" {suggestions} />
	</div>
</SampleWrapper>
