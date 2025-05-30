<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Switch, Table } from '../../../index.js';
	let activeTab = 'Preview';
	let form: any = {};
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Switch from '{$importDocumentSrc}/Switch.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="primary"', 'colors="primary"', 'value={true}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="secondary"', 'colors="secondary"', 'value={true}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode name="Switch" one_line props={['label="accent"', 'colors="accent"', 'value={true}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode name="Switch" one_line props={['label="error"', 'colors="error"', 'value={true}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode name="Switch" one_line props={['label="info"', 'colors="info"', 'value={true}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="natural"', 'colors="natural"', 'value={true}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="success"', 'colors="success"', 'value={true}']}
			></TagCode>
		</TagCode>
		<TagCode name="div">
			<TagCode
				name="Switch"
				one_line
				props={['label="warning"', 'colors="warning"', 'value={true}']}
			></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div>
			<Switch label="primary" color="primary" value={true} />
		</div>
		<div>
			<Switch label="secondary" color="secondary" value={true} />
		</div>
		<div>
			<Switch label="accent" color="accent" value={true} />
		</div>
		<div>
			<Switch label="error" color="error" value={true} />
		</div>
		<div>
			<Switch label="info" color="info" value={true} />
		</div>
		<div>
			<Switch label="natural" color="natural" value={true} />
		</div>
		<div>
			<Switch label="success" color="success" value={true} />
		</div>
		<div>
			<Switch label="warning" color="warning" value={true} />
		</div>
	</div>
</SampleWrapper>
