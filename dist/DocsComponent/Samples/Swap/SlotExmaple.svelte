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
