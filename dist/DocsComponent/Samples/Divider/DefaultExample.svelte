<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Divider, Switch, Table } from '../../../index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Card from '../../../components/Card/Card.svelte';
	let activeTab = 'Preview';
	let form: any = {};
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Divider</span> from '{$importDocumentSrc}/Divider.svelte';
			import <span class="text-green-600">Card</span> from '{$importDocumentSrc}/Card.svelte';
			<br />
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Card" props={['class="w-full h-14 bg-base-300 flex items-center justify-center"']}>Content</TagCode>
		<TagCode name="Divider">Divider</TagCode>
		<TagCode name="Card" props={['class="w-full h-14 bg-base-300 flex items-center justify-center"']}>Content</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="w-full">
			<Card class="w-full h-14 bg-base-300 flex items-center justify-center">Content</Card>
			<Divider>OR</Divider>
			<Card class="w-full h-14 bg-base-300 flex items-center justify-center">Content</Card>
		</div>
	</div>
</SampleWrapper>
