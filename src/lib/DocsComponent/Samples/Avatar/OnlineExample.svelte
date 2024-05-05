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
	let activeTab = 'javascript';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value: any;
	let checked = true;
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Avatar from '{$importDocumentSrc}/Avatar.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="Avatar" props={['online']} close_self />
			<TagCode name="Avatar" props={['online']}>
				<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
			</TagCode>
			<TagCode name="Avatar" props={['shape="circle"', 'online']}>
				<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
			</TagCode>
			<TagCode name="Avatar" props={['shape="rounded"', 'online']}>
				<TagCode name="img" props={['src="your image url"']} close_self></TagCode>
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<Avatar online />
			<Avatar online>
				<img src="/swiper-example-01.jpg" alt="" />
			</Avatar>
			<Avatar online shape="circle">
				<img src="/swiper-example-01.jpg" alt="" />
			</Avatar>
			<Avatar online shape="rounded">
				<img src="/swiper-example-01.jpg" alt="" />
			</Avatar>
		</SimpleCode>
	</TabItem>
</Tabs>
