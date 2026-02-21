<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalColor } from '../../../utils/El.types.js';
	let activeTab = 'Preview';
	let colors: GlobalColor[] = [
		'primary',
		'secondary',
		'accent',
		'error',
		'info',
		'success',
		'warning',
		'neutral'
	];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="Button" props={[`color="${color}"`,'variant="outline"']}>{color}</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full flex items-center justify-center gap-2 flex-wrap">
		{#each colors as color}
			<Button {color} variant="outline">{color}</Button>
		{/each}
	</div>
</SampleWrapper>
