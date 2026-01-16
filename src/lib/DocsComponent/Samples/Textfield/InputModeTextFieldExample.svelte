<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { TextFieldInputMode } from '$lib/components/TextField/TextField.type.js';
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
