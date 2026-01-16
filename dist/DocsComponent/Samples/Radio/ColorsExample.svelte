<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Radio from '{$importDocumentSrc}/Radio.svelte';
				import RadioGroup from '{$importDocumentSrc}/RadioGroup.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="grid grid-cols-4 gap-4"']}>
			<TagCode name="RadioGroup">
				<TagCode close_self name="Radio" props={['value="male"', 'label="male"']}></TagCode>
				<TagCode close_self name="Radio" props={['value="female"', 'label="female"']}></TagCode>
			</TagCode>
			{#each colors as color}
				<TagCode name="RadioGroup">
					<TagCode
						close_self
						name="Radio"
						props={['value="male"', 'label="male"', `color="${color}"`]}
					></TagCode>
					<TagCode
						close_self
						name="Radio"
						props={['value="female"', 'label="female"', `color="${color}"`]}
					></TagCode>
				</TagCode>
			{/each}
		</TagCode>
	</div>
	<div slot="preview">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			<RadioGroup value="male">
				<Radio value="male" label="male"></Radio>
				<Radio value="female" label="female"></Radio>
			</RadioGroup>
			{#each colors as color}
				<RadioGroup value="male">
					<Radio {color} value="male" label="male"></Radio>
					<Radio {color} value="female" label="female"></Radio>
				</RadioGroup>
			{/each}
		</div>
	</div>
</SampleWrapper>
