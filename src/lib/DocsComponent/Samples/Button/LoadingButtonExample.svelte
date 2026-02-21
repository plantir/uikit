<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import FunctionCode from '$lib/DocsComponent/ComponentCode/FunctionCode.svelte';
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
