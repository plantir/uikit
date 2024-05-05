<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Radio, RadioGroup, Range, Switch, Table } from '$lib/index.js';
	let activeTab = 'javascript';
	let form: any = {};
	let sizes: any = ['lg', 'md', 'sm', 'xs'];
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Radio from '{$importDocumentSrc}/Radio.svelte';
				import RadioGroup from '{$importDocumentSrc}/RadioGroup.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="div" props={['class="grid grid-cols-4 gap-4"']}>
				{#each sizes as size}
					<TagCode name="RadioGroup">
						<TagCode
							close_self
							name="Radio"
							props={['value="male"', 'label="male"', `size="${size}"`]}
						></TagCode>
						<TagCode
							close_self
							name="Radio"
							props={['value="female"', 'label="female"', `size="${size}"`]}
						></TagCode>
					</TagCode>
				{/each}
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div class="grid grid-cols-4 gap-4">
				{#each sizes as size}
					<RadioGroup value="male">
						<Radio {size} value="male" label="male"></Radio>
						<Radio {size} value="female" label="female"></Radio>
					</RadioGroup>
				{/each}
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
