<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
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
				import Badge from '{$importDocumentSrc}/Badge.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="p">
				this is a <TagCode name="Badge" one_line dont_break props={['variant="outline"']}
					>default</TagCode
				> inside of a paragraph
			</TagCode>
			{#each colors as color}
				<TagCode name="p">
					this is a <TagCode
						name="Badge"
						one_line
						dont_break
						props={[`color="${color}"`, 'variant="outline"']}>{color}</TagCode
					> inside of a paragraph
				</TagCode>
			{/each}
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<p>
				this is a <Badge variant="outline">default</Badge> inside of a paragraph
			</p>
			{#each colors as color}
				<p>
					this is a <Badge variant="outline" {color}>{color}</Badge> inside of a paragraph
				</p>
			{/each}
		</SimpleCode>
	</TabItem>
</Tabs>
