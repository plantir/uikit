<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Divider, Switch, Table } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Divider from '{$importDocumentSrc}/Divider.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="Divider" one_line props={['class="my-4"', 'start']}>Divider start</TagCode>
		<TagCode name="Divider" one_line props={['class="my-4"', 'end']}>Divider end</TagCode>
	</div>
	<div slot="preview">
		<Divider class="my-4" start>Divider start</Divider>
		<Divider class="my-4" end>Divider end</Divider>
	</div>
</SampleWrapper>
