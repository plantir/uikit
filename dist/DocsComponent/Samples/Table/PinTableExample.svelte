<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Table } from '../../../index.js';
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
		<TagCode name="div" props={['class="h-[120px] overfloe-y-auto"']}>
			<TagCode name="Table" props={['pinHead']}>
				<TagCode name="thead">
					<TagCode name="tr">
						<TagCode name="th" one_line>Name</TagCode>
						<TagCode name="th" one_line>Job</TagCode>
						<TagCode name="th" one_line>Age</TagCode>
					</TagCode>
				</TagCode>
				<TagCode name="tbody">
					{#each { length: 4 } as i}
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
					{/each}
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="h-[120px] overflow-y-auto">
			<Table pinHead>
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
	</div>
</SampleWrapper>
