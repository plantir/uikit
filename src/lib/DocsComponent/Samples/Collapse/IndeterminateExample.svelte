<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Checkbox, Collapse, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
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
				import Collapse from '{$importDocumentSrc}/Collapse.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			{#each { length: 3 } as i}
				<TagCode name="Collapse" props={['plus']}>
					<TagCode name="div" props={['slot="title"']} one_line>Title of collapse</TagCode>
					<TagCode name="div">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, harum. Maiores aliquid
						accusamus reprehenderit ipsam illo error deleniti ut quibusdam quia perspiciatis
						officiis dolores harum consequatur, sequi voluptas incidunt eius?
					</TagCode>
				</TagCode>
			{/each}
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			{#each { length: 3 } as i}
				<Collapse plus>
					<div slot="title">Title of collapse</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, harum. Maiores aliquid
						accusamus reprehenderit ipsam illo error deleniti ut quibusdam quia perspiciatis
						officiis dolores harum consequatur, sequi voluptas incidunt eius?
					</div>
				</Collapse>
			{/each}
		</SimpleCode>
	</TabItem>
</Tabs>
