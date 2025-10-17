<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Autocomplete, Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let items: any[] = [];
	let value = '';
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
	import ArrayCode from '$lib/DocsComponent/ComponentCode/ArrayCode.svelte';

	function debounced(callback: any, timeout = 300) {
		let timer: any
		return (...args: any[]) => {
			clearTimeout(timer)
			timer = setTimeout(() => callback(...args), timeout)
		}
	}

	function onInput(query: string) {
		var url = 'https://api.github.com/search/repositories?q=' + encodeURIComponent(query)

		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				items = json?.items ?? []
			})
			.catch(() => {
				items = []
			})
	}

	const debouncedOnInput = debounced(onInput)

</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Autocomplete</span> from '{$importDocumentSrc}/Autocomplete.svelte';
			<br />
			<ArrayCode name="items" {items} />
			<br />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex flex-col flex-wrap gap-4 mb-96"']}>
			<TagCode
				close_self
				name="Autocomplete"
				props={[`oninput={debouncedOnInput}`, `dismissible`, `label="Fetch example Autocomplete""`, 'items={items.map(x => ({title: `${x.full_name}`, value: x.id}))}', 'class="w-md"']}
			/>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-col flex-wrap gap-4 mb-96">
			<Autocomplete oninput={debouncedOnInput} dismissible label="Fetch example Autocomplete" items={items.map(x => ({title: `${x.full_name}`, value: x.id}))} class="w-md"/>
		</div>
	</div>
</SampleWrapper>
