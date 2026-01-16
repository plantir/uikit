<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value: any;
	let checked = true;
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Badge from '{$importDocumentSrc}/Badge.svelte';
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="p">
			this is a <br />
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode>
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode>
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode>
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode>
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode> inside of a paragraph
		</TagCode>
	</div>
	<p slot="preview">
		this is a
		<Badge dismissable>badge1</Badge>
		<Badge dismissable>badge2</Badge>
		<Badge dismissable>badge3</Badge>
		<Badge dismissable>badge4</Badge>
		<Badge dismissable>badge5</Badge> inside of a paragraph
	</p>
</SampleWrapper>