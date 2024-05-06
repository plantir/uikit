<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	let activeTab = 'Preview';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Select from '{$importDocumentSrc}/Select.svelte';
			</ScriptCode>
			</pre>
	</div>
</SampleWrapper>
