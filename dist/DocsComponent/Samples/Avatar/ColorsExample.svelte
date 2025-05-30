<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Avatar, Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
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
		<TagCode name="div" props={['class="flex gap-4"']}>
			<TagCode name="Avatar" props={['text']} one_line>default</TagCode>
			{#each colors as color}
				<TagCode name="Avatar" props={['text', `color="${color}"`]} one_line>{color[0]}</TagCode>
			{/each}
		</TagCode>
		<TagCode name="div" props={['class="flex gap-4 mt-4"']}>
			<TagCode name="Avatar" props={['ring']}>
				<TagCode name="img" close_self props={['src="your image source"']}></TagCode></TagCode
			>
			{#each colors as color}
				<TagCode name="Avatar" props={['ring', `color="${color}"`]}>
					<TagCode name="img" close_self props={['src="your image source"']}></TagCode>
				</TagCode>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex gap-4 flex-wrap">
			<Avatar text>default</Avatar>
			{#each colors as color}
				<Avatar text {color}>{color[0]}</Avatar>
			{/each}
		</div>
		<div class="flex gap-4 flex-wrap mt-4">
			<Avatar ring>
				<img src="/swiper-example-01.jpg" alt="" />
			</Avatar>
			{#each colors as color}
				<Avatar ring {color}>
					<img src="/swiper-example-01.jpg" alt="" />
				</Avatar>
			{/each}
		</div>
	</div>
</SampleWrapper>
