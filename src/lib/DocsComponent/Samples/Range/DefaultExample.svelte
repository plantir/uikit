<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Drawer, Range, Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let value = 40;
	let open = false;
	function openDrawer() {
		open = true;
	}
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
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
		<TagCode name="Range" close_self props={['label="Range"', 'bind:value']}></TagCode>
	</div>
	<div slot="preview">
		<Range label="Range" bind:value />
	</div>
</SampleWrapper>
