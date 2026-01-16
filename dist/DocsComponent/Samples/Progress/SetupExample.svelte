<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Progress from '{$importDocumentSrc}/Progress.svelte';
			</ScriptCode>
			</pre>
	</div>
</SampleWrapper>
