<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = [
		'primary',
		'secondary',
		'accent',
		'success',
		'warning',
		'info',
		'error',
		'neutral'
	];
	let value: any;
	let checked = true;
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Badge</span> from '{$importDocumentSrc}/Badge.svelte';
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="p">
			this is a <TagCode name="Badge" one_line dont_break props={['variant="ghost"']}
				>default</TagCode
			> inside of a paragraph
		</TagCode>
		{#each colors as color}
			<TagCode name="p">
				this is a <TagCode
					name="Badge"
					one_line
					dont_break
					props={[`color="${color}"`, 'variant="ghost"']}>{color}</TagCode
				> inside of a paragraph
			</TagCode>
		{/each}
	</div>
	<div slot="preview">
		<p>
			this is a <Badge variant="ghost">default</Badge> inside of a paragraph
		</p>
		{#each colors as color}
			<p>
				this is a <Badge variant="ghost" {color}>{color}</Badge> inside of a paragraph
			</p>
		{/each}
	</div>
</SampleWrapper>
