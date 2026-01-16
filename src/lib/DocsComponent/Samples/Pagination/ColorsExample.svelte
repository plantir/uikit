<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Pagination, Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let pages: any = [5, 5, 5, 5, 5, 5, 5, 5, 5];
	let colors: any = [
		'primary',
		'secondary',
		'accent',
		'success',
		'warning',
		'info',
		'error',
		'neutral'
	];
	import SampleWrapper from '../SampleWrapper.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Pagination</span> from '{$importDocumentSrc}/Pagination.svelte';
			<br />
			<LetCode name="page" value="5" />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="grid grid-cols-2 gap-4"']}>
			<TagCode name="Pagination" props={['bind:page', 'lastPage={10}']} close_self />
			{#each colors as color}
				<TagCode
					name="Pagination"
					props={['bind:page', 'lastPage={10}', `color="${color}"`]}
					close_self
				/>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Pagination bind:page={pages[0]} lastPage={10} />
			{#each colors as color, index}
				<Pagination bind:page={pages[index + 1]} lastPage={10} {color} />
			{/each}
		</div>
	</div>
</SampleWrapper>
