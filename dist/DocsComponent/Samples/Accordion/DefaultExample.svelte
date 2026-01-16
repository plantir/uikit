<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Avatar, Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Accordion from '../../../components/Accordion/Accordion.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value: any;
	let checked = true;
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Accordion</span> from '{$importDocumentSrc}/Accordion.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Accordion" props={['title="accordion title 1"', 'name="accordion-default"']}>
			accordion content sample
		</TagCode>
		<TagCode name="Accordion" props={['title="accordion title 2"', 'name="accordion-default"']}>
			accordion content sample
		</TagCode>
		<TagCode name="Accordion" props={['title="accordion title 3"', 'name="accordion-default"']}>
			accordion content sample
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<Accordion title="accordion title 1" name="accordion-default">accordion content sample</Accordion>
		<Accordion title="accordion title 2" name="accordion-default">accordion content sample</Accordion>
		<Accordion title="accordion title 3" name="accordion-default">accordion content sample</Accordion>
	</div>
</SampleWrapper>
