<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Pagination, Switch, Table } from '../../../index.js';
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
	import LetCode from '../../ComponentCode/LetCode.svelte';
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
