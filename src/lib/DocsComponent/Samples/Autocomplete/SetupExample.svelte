<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Autocomplete from '{$importDocumentSrc}/Autocomplete.svelte';
			</ScriptCode>
		</pre>
	</div>
</SampleWrapper>
