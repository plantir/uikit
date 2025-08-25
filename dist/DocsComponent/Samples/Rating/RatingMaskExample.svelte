<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { GlobalColorsText, GlobalSizesText, importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Drawer, Range, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let value = 3;
	let open = false;
	let masks: GlobalMask[] = [
		'squircle',
		'heart',
		'hexagon',
		'hexagon-2',
		'decagon',
		'pentagon',
		'diamond',
		'square',
		'circle',
		'star',
		'star-2',
		'triangle',
		'triangle-2',
		'triangle-3',
		'triangle-4'
	];
	function openDrawer() {
		open = true;
	}
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '../../ComponentCode/LetCode.svelte';
	import Rating from '../../../components/Rating/Rating.svelte';
	import type { GlobalColor, GlobalMask } from '../../../utils/El.types.js';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Rating</span> from '{$importDocumentSrc}/Rating.svelte';
			<br />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each masks as mask}
			<TagCode name="Rating" props={[`mask="${mask}"`]} close_self></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex flex-col gap-4">
			{#each masks as mask}
				<Rating {mask} value={3}></Rating>
			{/each}
		</div>
	</div>
</SampleWrapper>
