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
		{#each colors as color}
			<TagCode name="p">
				this is a <TagCode
					name="Badge"
					one_line
					dont_break
					props={[`color="${color}"`, 'variant="dot"']}>{color}</TagCode
				> inside of a paragraph
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		{#each colors as color}
			<p>
				this is a <Badge variant="dot" {color}>{color}</Badge> inside of a paragraph
			</p>
		{/each}
	</div>
</SampleWrapper>