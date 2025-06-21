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
	import Badge from '$lib/components/Badge/Badge.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let sizes: any = ['lg', 'md', 'sm', 'xs'];
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Checkbox from '{$importDocumentSrc}/Checkbox.svelte';
		</ScriptCode>
		</pre>
	<div slot="html">
		{#each sizes as size}
			<TagCode name="p">
				this is a <TagCode name="Badge" one_line dont_break props={[`size="${size}"`]}
					>{size} badge</TagCode
				> inside of a paragraph
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		{#each sizes as size}
			<p>
				this is a <Badge {size}>{size} badge</Badge> inside of a paragraph
			</p>
		{/each}
	</div>
</SampleWrapper>