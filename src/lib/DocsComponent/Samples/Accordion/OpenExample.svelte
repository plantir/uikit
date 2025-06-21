<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Avatar, Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value: any;
	let checked = true;
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Accordion from '{$importDocumentSrc}/Accordion.svelte';
		</ScriptCode>
	</pre>
	<div slot="html">
		<TagCode name="Accordion" props={['title="accordion title 1"', 'open']}>
			accordion content sample
		</TagCode>
		<TagCode name="Accordion" props={['title="accordion title 2"']}>
			accordion content sample
		</TagCode>
		<TagCode name="Accordion" props={['title="accordion title 3"']}>
			accordion content sample
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<Accordion title="accordion title 1" open>accordion content sample</Accordion>
		<Accordion title="accordion title 2">accordion content sample</Accordion>
		<Accordion title="accordion title 3">accordion content sample</Accordion>
	</div>
</SampleWrapper>
