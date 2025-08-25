<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Range, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let value = '';
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '../../ComponentCode/LetCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Range</span> from '{$importDocumentSrc}/Range.svelte';
			<br />
			<LetCode name="value" value="40" />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode
			name="Range"
			close_self
			props={['label="Min And Max Range"', 'bind:value', 'min="20"', 'max="50"']}
		></TagCode>
		<TagCode name="div">
			number is : {'{'}value{'}'}
		</TagCode>
	</div>
	<div slot="preview">
		<Range label="Min And Max Range" min="20" max="50" bind:value />
		<div>
			number is : {value}
		</div>
	</div>
</SampleWrapper>
