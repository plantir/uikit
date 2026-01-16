<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Avatar, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import Badge from '../../../components/Badge/Badge.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let sizes: any = ['lg', 'md', 'sm', 'xs'];
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Avatar from '{$importDocumentSrc}/Avatar.svelte';
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="div" props={['class="grid grid-cols-4"']}>
			{#each sizes as size}
				<TagCode name="div">
					<TagCode name="Avatar" props={[`size="${size}"`]}>
						<TagCode name="img" props={['src="your image source"']} close_self />
					</TagCode>
				</TagCode>
			{/each}
		</TagCode>
	</div>
	<div class="flex flex-wrap gap-4" slot="preview">
		{#each sizes as size}
			<div>
				<Avatar {size}>
					<img src="/swiper-example-01.jpg" alt="" />
				</Avatar>
			</div>
		{/each}
	</div>
</SampleWrapper>