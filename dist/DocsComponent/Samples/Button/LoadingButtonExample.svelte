<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '../../ComponentCode/LetCode.svelte';
	import FunctionCode from '../../ComponentCode/FunctionCode.svelte';
	let activeTab = 'Preview';
	let loading_button = false;
	function click() {
		loading_button = true;
		setTimeout(() => {
			loading_button = false;
		}, 2000);
	}
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
			<br />
			<LetCode name="loading_button" value="false" />
			<FunctionCode name="click">
				loading_button = true;<br />
				setTimeout(() => {'{'}<br />
				loading_button = false;<br />
				{'}'}, 2000);
			</FunctionCode>
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Button" props={['loading={loading_button}', 'onclick={click}']}
			>click me</TagCode
		>
	</div>
	<div slot="preview">
		<Button loading={loading_button} onclick={click}>click me</Button>
	</div>
</SampleWrapper>
