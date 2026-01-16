<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import { Progress } from '../../../index.js';
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
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Progress</span> from '{$importDocumentSrc}/Progress.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode close_self name="Progress" props={['value={value}', `color="${color}"`]}></TagCode>
		{/each}
	</div>
	<div slot="preview">
		<div class="w-56">
			{#each colors as color}
				<Progress value="50" {color}></Progress>
			{/each}
		</div>
	</div>
</SampleWrapper>
