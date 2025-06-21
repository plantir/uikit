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
		<TagCode name="div" props={['class="grid grid-cols-2 gap-4"']}>
			<TagCode name="div">
				<TagCode
					name="Accordion"
					props={['title="accordion title 1"', 'open', 'name="accordion-1"']}
				>
					accordion content sample
				</TagCode>
				<TagCode name="Accordion" props={['title="accordion title 2"', 'name="accordion-1"']}>
					accordion content sample
				</TagCode>
				<TagCode name="Accordion" props={['title="accordion title 3"', 'name="accordion-1"']}>
					accordion content sample
				</TagCode>
			</TagCode>
			<TagCode name="div">
				<TagCode
					name="Accordion"
					props={['title="accordion title 1"', 'open', 'name="accordion-2"']}
				>
					accordion content sample
				</TagCode>
				<TagCode name="Accordion" props={['title="accordion title 2"', 'name="accordion-2"']}>
					accordion content sample
				</TagCode>
				<TagCode name="Accordion" props={['title="accordion title 3"', 'name="accordion-2"']}>
					accordion content sample
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="grid grid-cols-2 gap-4">
			<div>
				<Accordion title="accordion title 1" open name="accordion-1"
					>accordion content sample</Accordion
				>
				<Accordion title="accordion title 2" name="accordion-1">accordion content sample</Accordion>
				<Accordion title="accordion title 3" name="accordion-1">accordion content sample</Accordion>
			</div>
			<div>
				<Accordion title="accordion title 1" open name="accordion-2"
					>accordion content sample</Accordion
				>
				<Accordion title="accordion title 2" name="accordion-2">accordion content sample</Accordion>
				<Accordion title="accordion title 3" name="accordion-2">accordion content sample</Accordion>
			</div>
		</div>
	</div>
</SampleWrapper>
