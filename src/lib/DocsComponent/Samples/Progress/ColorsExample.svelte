<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import { Progress } from '$lib/index.js';
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Progress from '{$importDocumentSrc}/Progress.svelte';
				let value = 50;
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode close_self name="Progress" props={['value={value}', `color="${color}"`]}></TagCode>
		{/each}
	</div>
	<div slot="preview">
		{#each colors as color}
			<Progress value="50" {color}></Progress>
		{/each}
	</div>
</SampleWrapper>
