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
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
            <ScriptCode>
                import TextArea from '{$importDocumentSrc}/TextArea.svelte';
            </ScriptCode>
        </pre>
	</div>
	<div slot="html">
		<TagCode name="TextArea" props={['size="lg"', 'label="lg"']}></TagCode>
		<TagCode name="TextArea" props={['size="md"', 'label="md"']}></TagCode>
		<TagCode name="TextArea" props={['size="sm"', 'label="sm"']}></TagCode>
		<TagCode name="TextArea" props={['size="xs"', 'label="xs"']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<TextArea size="lg" label="lg"></TextArea>
			<TextArea size="md" label="md"></TextArea>
			<TextArea size="sm" label="sm"></TextArea>
			<TextArea size="xs" label="xs"></TextArea>
		</div>
	</div>
</SampleWrapper>
