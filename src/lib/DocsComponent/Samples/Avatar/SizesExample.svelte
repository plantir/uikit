<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Avatar, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	import Badge from '$lib/components/Badge/Badge.svelte';
	let activeTab = 'javascript';
	let form: any = {};
	let sizes: any = ['lg', 'md', 'sm', 'xs'];
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
			<TagCode name="div" props={['class="grid grid-cols-4"']}>
				{#each sizes as size}
					<TagCode name="div">
						<TagCode name="Avatar" props={[`size="${size}"`]}>
							<TagCode name="img" props={['src="your image source"']} close_self />
						</TagCode>
					</TagCode>
				{/each}
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div class="grid grid-cols-4">
				{#each sizes as size}
					<div>
						<Avatar {size}>
							<img src="/swiper-example-01.jpg" alt="" />
						</Avatar>
					</div>
				{/each}
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
