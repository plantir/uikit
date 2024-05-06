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
			import Collapse from '{$importDocumentSrc}/Collapse.svelte';
		</ScriptCode>
		</pre>
	<div slot="html">
		{#each { length: 3 } as i}
			<TagCode name="Collapse" props={['plus']}>
				<TagCode name="div" props={['slot="title"']} one_line>Title of collapse</TagCode>
				<TagCode name="div">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, harum. Maiores aliquid
					accusamus reprehenderit ipsam illo error deleniti ut quibusdam quia perspiciatis officiis
					dolores harum consequatur, sequi voluptas incidunt eius?
				</TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		{#each { length: 3 } as i}
			<Collapse plus>
				<div slot="title">Title of collapse</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, harum. Maiores aliquid
					accusamus reprehenderit ipsam illo error deleniti ut quibusdam quia perspiciatis officiis
					dolores harum consequatur, sequi voluptas incidunt eius?
				</div>
			</Collapse>
		{/each}
	</div>
</SampleWrapper>