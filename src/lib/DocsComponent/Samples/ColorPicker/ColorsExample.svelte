<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let form: any = {};
	import SampleWrapper from '../SampleWrapper.svelte';
	import ColorPicker from '$lib/components/ColorPicker/ColorPicker.svelte';
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import ColorPicker from '{$importDocumentSrc}/ColorPicker.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex flex-wrap gap-2 md:gap-4"']}>
			<TagCode name="ColorPicker" close_self />
			{#each colors as color}
				<TagCode name="ColorPicker" close_self props={[`color="${color}"`]} />
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-2 md:gap-4">
			<ColorPicker />
			{#each colors as color}
				<ColorPicker {color} />
			{/each}
		</div>
	</div>
</SampleWrapper>
