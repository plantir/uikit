<script lang="ts">
	import ArrayCode from '$lib/DocsComponent/ComponentCode/ArrayCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { Autocomplete } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	
	let items: any[] = [];
	let value: any[] = [];
	
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
					props={[`bind:value`, `oninput={debouncedOnInput}`, `multiple`, 'dismissible', `label="multiple Autocomplete"`, 'items={items.map(x => ({title: `${x.full_name}`, value: x.id}))}', `color="${color}"`, 'class="w-md"']}
				/>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-col flex-wrap gap-4 mb-96">
			<Autocomplete bind:value oninput={debouncedOnInput} multiple dismissible label="multiple Autocomplete" items={items.map(x => ({title: `${x.full_name}`, value: x.id}))} class="w-md"/>
		</div>
		<div>{JSON.stringify(value)}</div>
	</div>
</SampleWrapper>
