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
		<TagCode name="Avatar" props={['offline']} close_self />
		<TagCode name="Avatar" props={['offline']}>
			<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
		</TagCode>
		<TagCode name="Avatar" props={['shape="circle"', 'offline']}>
			<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
		</TagCode>
		<TagCode name="Avatar" props={['shape="rounded"', 'offline']}>
			<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Avatar offline />
		<Avatar offline>
			<img src="/swiper-example-01.jpg" alt="" />
		</Avatar>
		<Avatar offline shape="circle">
			<img src="/swiper-example-01.jpg" alt="" />
		</Avatar>
		<Avatar offline shape="rounded">
			<img src="/swiper-example-01.jpg" alt="" />
		</Avatar>
	</div>
</SampleWrapper>
