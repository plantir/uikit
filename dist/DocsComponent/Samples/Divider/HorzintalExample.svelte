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
	let activeTab = 'Preview';
	let form: any = {};
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Divider from '{$importDocumentSrc}/Divider.svelte';
			</ScriptCode>
		</pre>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex gap-4"']}>
			<TagCode name="div">
				<TagCode name="p">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
					repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa eos
					nemo harum voluptates necessitatibus hic maiores.
				</TagCode>
				<TagCode name="p">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
					repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa eos
					nemo harum voluptates necessitatibus hic maiores.
				</TagCode>
			</TagCode>
			<TagCode name="Divider" props={['horzintal']} one_line>Divider</TagCode>
			<TagCode name="div">
				<TagCode name="p">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
					repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa eos
					nemo harum voluptates necessitatibus hic maiores.
				</TagCode>
				<TagCode name="p">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
					repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa eos
					nemo harum voluptates necessitatibus hic maiores.
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex gap-4">
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
					repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa eos
					nemo harum voluptates necessitatibus hic maiores.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
					repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa eos
					nemo harum voluptates necessitatibus hic maiores.
				</p>
			</div>
			<Divider horizontal>Divider</Divider>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
					repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa eos
					nemo harum voluptates necessitatibus hic maiores.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
					repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa eos
					nemo harum voluptates necessitatibus hic maiores.
				</p>
			</div>
		</div>
	</div>
</SampleWrapper>