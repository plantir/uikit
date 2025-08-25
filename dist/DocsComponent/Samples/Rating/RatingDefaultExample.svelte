<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Drawer, Range, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let value = 3;
	let open = false;
	function openDrawer() {
		open = true;
	}
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '../../ComponentCode/LetCode.svelte';
	import Rating from '../../../components/Rating/Rating.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Rating</span> from '{$importDocumentSrc}/Rating.svelte';
			<br />
			<LetCode name="value" value="3" />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Rating" close_self props={['bind:value']}></TagCode>
	</div>
	<div slot="preview">
        <Rating bind:value></Rating>
	</div>
</SampleWrapper>
