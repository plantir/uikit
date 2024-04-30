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
	let activeTab = 'javascript';
	let form: any = {};
</script>

<Tabs bind:selected={activeTab}>
	<TabItem title="Javascript" value="javascript">
		<ShowCode language="javascript">
			<pre>
			<ScriptCode>
				import Divider from '{$importDocumentSrc}/Divider.svelte';
			</ScriptCode>
			</pre>
		</ShowCode>
	</TabItem>
	<TabItem title="Html" value="html">
		<ShowCode language="svelte">
			<TagCode name="div" props={['class="flex gap-4"']}>
				<TagCode name="div">
					<TagCode name="p">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
						repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa
						eos nemo harum voluptates necessitatibus hic maiores.
					</TagCode>
					<TagCode name="p">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
						repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa
						eos nemo harum voluptates necessitatibus hic maiores.
					</TagCode>
				</TagCode>
				<TagCode name="Divider" props={['horzintal']} one_line>Divider</TagCode>
				<TagCode name="div">
					<TagCode name="p">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
						repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa
						eos nemo harum voluptates necessitatibus hic maiores.
					</TagCode>
					<TagCode name="p">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
						repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa
						eos nemo harum voluptates necessitatibus hic maiores.
					</TagCode>
				</TagCode>
			</TagCode>
		</ShowCode>
	</TabItem>
	<TabItem title="Simple" value="simple">
		<SimpleCode>
			<div class="flex gap-4">
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
						repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa
						eos nemo harum voluptates necessitatibus hic maiores.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
						repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa
						eos nemo harum voluptates necessitatibus hic maiores.
					</p>
				</div>
				<Divider horizontal>Divider</Divider>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
						repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa
						eos nemo harum voluptates necessitatibus hic maiores.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi commodi aut
						repellendus voluptatum, molestiae in recusandae corrupti est aliquam et ducimus, ipsa
						eos nemo harum voluptates necessitatibus hic maiores.
					</p>
				</div>
			</div>
		</SimpleCode>
	</TabItem>
</Tabs>
