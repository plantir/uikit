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
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Button from '{$importDocumentSrc}/Button.svelte';
		</ScriptCode>
	</pre>
	<div slot="html">
		<TagCode name="Button" props={['size="lg"']}>lg</TagCode>
		<TagCode name="Button" props={['size="md"']}>md</TagCode>
		<TagCode name="Button" props={['size="sm"']}>sm</TagCode>
		<TagCode name="Button" props={['size="xs"']}>xs</TagCode>
	</div>
	<div slot="preview">
		<Button size="lg">lg</Button>
		<Button size="md">md</Button>
		<Button size="sm">sm</Button>
		<Button size="xs">xs</Button>
	</div>
</SampleWrapper>
