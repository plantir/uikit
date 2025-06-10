<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let form: any = {};
	import SampleWrapper from '../SampleWrapper.svelte';
	import Swap from '$lib/components/Swap/Swap.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Swap from '{$importDocumentSrc}/Swap.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div">
			<TagCode name="Swap" props={['on="ON"', 'off="OFF"', 'value={false}', 'flip']}>
				<TagCode name="svelte:fragment" props={['slot="on"']}>
					<TagCode name="div" props={['class="text-4xl"']}>😈</TagCode>
				</TagCode>
				<TagCode name="svelte:fragment" props={['slot="off"']}>
					<TagCode name="div" props={['class="text-4xl"']}>😇</TagCode>
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div>
			<Swap value={false} on="ON" off="OFF" flip>
				<svelte:fragment slot="on">
					<div class="text-4xl">😈</div>
				</svelte:fragment>
				<svelte:fragment slot="off">
					<div class="text-4xl">😇</div>
				</svelte:fragment>
			</Swap>
		</div>
	</div>
</SampleWrapper>
