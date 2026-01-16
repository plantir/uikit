<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import Badge from '../../../components/Badge/Badge.svelte';
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
					>{size}</TagCode
				> inside of a paragraph
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		{#each sizes as size}
			<p>
				this is a <Badge {size}>{size}</Badge> inside of a paragraph
			</p>
		{/each}
	</div>
</SampleWrapper>