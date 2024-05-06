<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Table } from '$lib/index.js';
	let activeTab = 'Preview';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
			<ScriptCode>
				import Table from '{$importDocumentSrc}/Table.svelte';
			</ScriptCode>
			</pre>
	</div>
	<div slot="html">
		<TagCode name="Table" props={['zebra']}>
			<TagCode name="thead">
				<TagCode name="tr">
					<TagCode name="th" one_line>Name</TagCode>
					<TagCode name="th" one_line>Job</TagCode>
					<TagCode name="th" one_line>Age</TagCode>
				</TagCode>
			</TagCode>
			<TagCode name="tbody">
				<TagCode name="tr">
					<TagCode name="td" one_line>Cy Ganderton</TagCode>
					<TagCode name="td" one_line>Quality Control Specialist</TagCode>
					<TagCode name="td" one_line>23</TagCode>
				</TagCode>
				<TagCode name="tr">
					<TagCode name="td" one_line>Hart Hagerty</TagCode>
					<TagCode name="td" one_line>Desktop Support Technician</TagCode>
					<TagCode name="td" one_line>25</TagCode>
				</TagCode>
				<TagCode name="tr">
					<TagCode name="td" one_line>Brice Swyre</TagCode>
					<TagCode name="td" one_line>Tax Accountant</TagCode>
					<TagCode name="td" one_line>21</TagCode>
				</TagCode>
				<TagCode name="tr">
					<TagCode name="td" one_line>Cy Ganderton</TagCode>
					<TagCode name="td" one_line>Quality Control Specialist</TagCode>
					<TagCode name="td" one_line>23</TagCode>
				</TagCode>
				<TagCode name="tr">
					<TagCode name="td" one_line>Hart Hagerty</TagCode>
					<TagCode name="td" one_line>Desktop Support Technician</TagCode>
					<TagCode name="td" one_line>25</TagCode>
				</TagCode>
				<TagCode name="tr">
					<TagCode name="td" one_line>Brice Swyre</TagCode>
					<TagCode name="td" one_line>Tax Accountant</TagCode>
					<TagCode name="td" one_line>21</TagCode>
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Table zebra>
			<thead>
				<tr>
					<th>Name</th>
					<th>Job</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Cy Ganderton</td>
					<td> Quality Control Specialist </td>
					<td> 23 </td>
				</tr>
				<tr>
					<td>Hart Hagerty</td>
					<td> Desktop Support Technician </td>
					<td> 25</td>
				</tr>
				<tr>
					<td>Brice Swyre</td>
					<td> Tax Accountant </td>
					<td> 21 </td>
				</tr>
				<tr>
					<td>Cy Ganderton</td>
					<td> Quality Control Specialist </td>
					<td> 23 </td>
				</tr>
				<tr>
					<td>Hart Hagerty</td>
					<td> Desktop Support Technician </td>
					<td> 25</td>
				</tr>
				<tr>
					<td>Brice Swyre</td>
					<td> Tax Accountant </td>
					<td> 21 </td>
				</tr>
			</tbody>
		</Table>
	</div>
</SampleWrapper>
