<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import TextArea from '../../../components/TextArea/TextArea.svelte';
	let activeTab = 'Preview';
	let value = 'John Snow';
	let parentName = 'Stark?!';
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '../../ComponentCode/LetCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">TextArea</span> from '{$importDocumentSrc}/TextArea.svelte';
			<br />
			<LetCode name="value" value="John Snow" dont_break></LetCode>
			<LetCode name="parentName" value="Stark?!"></LetCode>
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="TextArea" props={['{value}', 'label="Name"']}></TagCode>
		<TagCode name="TextArea" props={['value={parentName}', 'label="Parent Name"']}></TagCode>
	</div>
	<div slot="preview">
		<TextArea {value} label="Name" />
		<TextArea value={parentName} label="Parent Name" />
	</div>
</SampleWrapper>
