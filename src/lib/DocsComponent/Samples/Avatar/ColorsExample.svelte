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
			<TagCode name="div" props={['class="flex gap-4"']}>
				<TagCode name="Avatar" props={['text']} one_line>default</TagCode>
				{#each colors as color}
					<TagCode name="Avatar" props={['text', `color="${color}"`]} one_line>{color[0]}</TagCode>
				{/each}
			</TagCode>
			<TagCode name="div" props={['class="flex gap-4 mt-4"']}>
				<TagCode name="Avatar" props={['ring']}>
					<TagCode name="img" close_self props={['src="your image source"']}></TagCode></TagCode
				>
				{#each colors as color}
					<TagCode name="Avatar" props={['ring', `color="${color}"`]}>
						<TagCode name="img" close_self props={['src="your image source"']}></TagCode>
					</TagCode>
				{/each}
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div class="flex gap-4">
				<Avatar text>default</Avatar>
				{#each colors as color}
					<Avatar text {color}>{color[0]}</Avatar>
				{/each}
			</div>
			<div class="flex gap-4 mt-4">
				<Avatar ring>
					<img src="/swiper-example-01.jpg" alt="" />
				</Avatar>
				{#each colors as color}
					<Avatar ring {color}>
						<img src="/swiper-example-01.jpg" alt="" />
					</Avatar>
				{/each}
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
