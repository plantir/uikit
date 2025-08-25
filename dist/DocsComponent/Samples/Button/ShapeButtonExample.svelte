<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	import type { ButtonShape } from '../../../components/Button/Button.type.js';
	let shapes: ButtonShape[] = ['circle', 'square'];
	let activeTab = 'Preview';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each shapes as shape}
			<TagCode name="Button" props={[`shape="${shape}"`]}>{shape}</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full flex items-center justify-center gap-2 flex-wrap">
		{#each shapes as shape}
			<Button {shape}>{shape}</Button>
		{/each}
	</div>
</SampleWrapper>
