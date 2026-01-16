<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Divider, Switch, Table } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	let activeTab = 'Preview';
	let form: any = {};
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Divider</span> from '{$importDocumentSrc}/Divider.svelte';
		</TagCode>
		<br />
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
