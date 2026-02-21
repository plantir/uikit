<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	import SampleWrapper from '../SampleWrapper.svelte';
	import Swap from '../../../components/Swap/Swap.svelte';
	import SnippetTagCode from '../../ComponentCode/SnippetTagCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Swap</span> from '{$importDocumentSrc}/Swap.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div">
			<TagCode name="Swap" props={['value={false}', 'flip']}>
				<SnippetTagCode name="on">
					<TagCode name="div" props={['class="text-4xl"']}>😈</TagCode>
				</SnippetTagCode>
				<SnippetTagCode name="off">
					<TagCode name="div" props={['class="text-4xl"']}>😇</TagCode>
				</SnippetTagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div>
			<Swap value={false} flip>
				{#snippet on()}
					<div class="text-4xl">😈</div>
				{/snippet}
				{#snippet off()}
					<div class="text-4xl">😇</div>
				{/snippet}
			</Swap>
		</div>
	</div>
</SampleWrapper>
