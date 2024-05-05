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
		<TagCode name="Avatar" props={['ring']} one_line>default</TagCode>
		{#each colors as color}
			<TagCode name="Avatar" props={['ring', `color="${color}"`]} one_line>{color[0]}</TagCode>
		{/each}
	</div>
	<div class="flex gap-4" slot="preview">
		<Avatar ring>default</Avatar>
		{#each colors as color}
			<Avatar {color} ring>{color[0]}</Avatar>
		{/each}
	</div>
</SampleWrapper>
