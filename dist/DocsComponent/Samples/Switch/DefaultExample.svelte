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
	let form: any = $state({
		sport: false,
		sleep: false,
		games: false,
		sea: false
	});
	import SampleWrapper from '../SampleWrapper.svelte';
	import ObjectCode from '../../ComponentCode/ObjectCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Switch</span> from '{$importDocumentSrc}/Switch.svelte';
			<br />
			<ObjectCode name="form" item={form}></ObjectCode>
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like sports ?"', 'bind:value={form.sport}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like sleep ?"', 'bind:value={form.sleep}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="do you like games ?"', 'bind:value={form.games}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode name="Switch" one_line props={['label="do you like sea ?"', 'bind:value={form.sea}']}
			></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-col gap-4">
			<div>
				<Switch label="do you like sports ?" bind:value={form.sport} />
			</div>
			<div>
				<Switch label="do you like sleep ?" bind:value={form.sleep} />
			</div>
			<div>
				<Switch label="do you like games ?" bind:value={form.games} />
			</div>
			<div>
				<Switch label="do you like sea ?" bind:value={form.sea} />
			</div>
		</div>
	</div>
</SampleWrapper>
