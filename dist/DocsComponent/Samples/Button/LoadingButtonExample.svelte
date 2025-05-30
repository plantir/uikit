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
	<pre slot="javascript">
		<ScriptCode>
			import Button from '{$importDocumentSrc}/Button.svelte';
			let loading_button = false;
			function click(){'{'}
			loading_button = true;
			setTimeout(() => {'{'}
				loading_button = false;
			{'}'}, 2000);
			{'}'}
		</ScriptCode>
	</pre>
	<div slot="html">
		<TagCode name="Button" props={['loading={loading_button}', 'on:click={click}']}
			>click me</TagCode
		>
	</div>
	<div slot="preview">
		<Button loading={loading_button} on:click={click}>click me</Button>
	</div>
</SampleWrapper>
