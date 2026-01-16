<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { GlobalColorsText, GlobalSizesText, importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Drawer, Range, Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let value = 3;
	let open = false;
	let sizes: any = GlobalSizesText;
	function openDrawer() {
		open = true;
	}
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	import Rating from '$lib/components/Rating/Rating.svelte';
	import type { GlobalColor } from '$lib/utils/El.types.js';
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
		{#each sizes as size}
			<TagCode name="Rating" props={[`size="${size}"`]} close_self></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex flex-col gap-4">
			{#each sizes as size}
				<Rating {size} value={3}></Rating>
			{/each}
		</div>
	</div>
</SampleWrapper>
