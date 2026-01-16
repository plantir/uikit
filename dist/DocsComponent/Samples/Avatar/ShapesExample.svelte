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
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value: any;
	let checked = true;
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Avatar from '{$importDocumentSrc}/Avatar.svelte';
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="Avatar" props={['shape="square"']}>
			<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
		</TagCode>
		<TagCode name="Avatar" props={['shape="circle"']}>
			<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
		</TagCode>
		<TagCode name="Avatar" props={['shape="rounded"']}>
			<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Avatar shape="square">
			<img src="/swiper-example-01.jpg" alt="" />
		</Avatar>
		<Avatar shape="circle">
			<img src="/swiper-example-01.jpg" alt="" />
		</Avatar>
		<Avatar shape="rounded">
			<img src="/swiper-example-01.jpg" alt="" />
		</Avatar>
	</div>
</SampleWrapper>
