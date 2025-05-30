<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { Progress } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let value: any = 50;
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Progress from '{$importDocumentSrc}/Progress.svelte';
				let value=50;
			</ScriptCode>
		</pre>
	</div>
	<div slot="html">
		<TagCode close_self name="Progress"></TagCode>
		<TagCode close_self name="Progress" props={['value={value}']}></TagCode>
	</div>
	<div slot="preview">
		<Progress></Progress>
		<Progress {value}></Progress>
	</div>
</SampleWrapper>
