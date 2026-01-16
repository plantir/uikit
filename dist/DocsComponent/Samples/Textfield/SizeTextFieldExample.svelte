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
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
            <ScriptCode>
                import TextField from '{$importDocumentSrc}/TextField.svelte';
            </ScriptCode>
        </pre>
	</div>
	<div slot="html">
		<TagCode name="TextField" props={['size="lg"', 'label="lg"']}></TagCode>
		<TagCode name="TextField" props={['size="md"', 'label="md"']}></TagCode>
		<TagCode name="TextField" props={['size="sm"', 'label="sm"']}></TagCode>
		<TagCode name="TextField" props={['size="xs"', 'label="xs"']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<TextField size="lg" label="lg"></TextField>
			<TextField size="md" label="md"></TextField>
			<TextField size="sm" label="sm"></TextField>
			<TextField size="xs" label="xs"></TextField>
		</div>
	</div>
</SampleWrapper>
