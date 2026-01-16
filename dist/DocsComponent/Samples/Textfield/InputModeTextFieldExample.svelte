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
	import TextField from '../../../components/TextField/TextField.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { TextFieldInputMode } from '../../../components/TextField/TextField.type.js';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	let mods: HTMLInputTypeAttribute[] = [
		'color',
		'date',
		'datetime-local',
		'email',
		'month',
		'number',
		'password',
		'search',
		'tel',
		'text',
		'time',
		'url',
		'week'
	];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">TextField</span> from '{$importDocumentSrc}/TextField.svelte';
		</TagCode>
	</div>
	<div slot="html">
		{#each mods as mod}
			<TagCode name="TextField" props={[`type="${mod}"`, `label="${mod}"`]}></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="grid grid-cols-2 gap-4">
			{#each mods as mod}
				<TextField type={mod} label={mod}></TextField>
			{/each}
		</div>
	</div>
</SampleWrapper>
