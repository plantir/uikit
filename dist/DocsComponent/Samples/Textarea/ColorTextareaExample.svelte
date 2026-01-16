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
	import TextArea from '../../../components/TextArea/TextArea.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { GlobalColor } from '../../../utils/El.types.js';
	let colors: GlobalColor[] = [
		'primary',
		'secondary',
		'accent',
		'success',
		'warning',
		'info',
		'error',
		'neutral'
	];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">TextArea</span> from '{$importDocumentSrc}/TextArea.svelte';
			<br />
		</TagCode>
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="TextArea" props={[`color="${color}"`, `label="${color}"`]}></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="flex flex-col gap-4">
			{#each colors as color}
				<TextArea {color} label={color}></TextArea>
			{/each}
		</div>
	</div>
</SampleWrapper>
