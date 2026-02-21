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
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Button" props={['variant="glass"']}>glass</TagCode>
		<TagCode name="Button" props={['variant="ghost"']}>ghost</TagCode>
		<TagCode name="Button" props={['variant="link"']}>link</TagCode>
		<TagCode name="Button" props={['variant="outline"']}>outline</TagCode>
		<TagCode name="Button" props={['variant="dashed"']}>dashed</TagCode>
	</div>
	<div slot="preview">
		<Button variant="glass">glass</Button>
		<Button variant="ghost">ghost</Button>
		<Button variant="link">link</Button>
		<Button variant="outline">outline</Button>
		<Button variant="dashed">dashed</Button>
	</div>
</SampleWrapper>
