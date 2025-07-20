<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Checkbox, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value: any;
	let checked = true;
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Checkbox</span> from '{$importDocumentSrc}/Checkbox.svelte';
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="Checkbox" props={['label="indeterminate"', 'indeterminate']} close_self
		></TagCode>
	</div>
	<div slot="preview">
		<Checkbox label="indeterminate" indeterminate />
	</div>
</SampleWrapper>
