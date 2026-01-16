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
		<TagCode name="script">
			import <span class="text-green-600">Table</span> from '{$importDocumentSrc}/Table.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="h-[120px] overfloe-y-auto"']}>
			<TagCode name="Table" props={['pinCols']}>
				<TagCode name="thead">
					<TagCode name="tr">
						<TagCode name="th" one_line>#</TagCode>
						<TagCode name="th" one_line>Name</TagCode>
						<TagCode name="th" one_line>Job</TagCode>
						<TagCode name="th" one_line>Age</TagCode>
					</TagCode>
				</TagCode>
				<TagCode name="tbody">
					{#each { length: 4 } as i, index}
						<TagCode name="tr">
							<TagCode name="th" one_line>{index * 3 - 2}</TagCode>
							<TagCode name="td" one_line>Cy Ganderton</TagCode>
							<TagCode name="td" one_line>Quality Control Specialist</TagCode>
							<TagCode name="td" one_line>23</TagCode>
						</TagCode>
						<TagCode name="tr">
							<TagCode name="th" one_line>{index * 3 - 1}</TagCode>
							<TagCode name="td" one_line>Hart Hagerty</TagCode>
							<TagCode name="td" one_line>Desktop Support Technician</TagCode>
							<TagCode name="td" one_line>25</TagCode>
						</TagCode>
						<TagCode name="tr">
							<TagCode name="th" one_line>{index * 3}</TagCode>
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
		<div class=" w-[220px] overflow-y-auto overflow-x-auto">
			<Table pinCols>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Job</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>1</th>
						<td>Cy Ganderton</td>
						<td> Quality Control Specialist </td>
						<td> 23 </td>
					</tr>
					<tr>
						<th>2</th>
						<td>Hart Hagerty</td>
						<td> Desktop Support Technician </td>
						<td> 25</td>
					</tr>
					<tr>
						<th>3</th>
						<td>Brice Swyre</td>
						<td> Tax Accountant </td>
						<td> 21 </td>
					</tr>
					<tr>
						<th>4</th>
						<td>Cy Ganderton</td>
						<td> Quality Control Specialist </td>
						<td> 23 </td>
					</tr>
					<tr>
						<th>5</th>
						<td>Hart Hagerty</td>
						<td> Desktop Support Technician </td>
						<td> 25</td>
					</tr>
					<tr>
						<th>6</th>
						<td>Brice Swyre</td>
						<td> Tax Accountant </td>
						<td> 21 </td>
					</tr>
					<tr>
						<th>7</th>
						<td>Cy Ganderton</td>
						<td> Quality Control Specialist </td>
						<td> 23 </td>
					</tr>
					<tr>
						<th>8</th>
						<td>Hart Hagerty</td>
						<td> Desktop Support Technician </td>
						<td> 25</td>
					</tr>
					<tr>
						<th>9</th>
						<td>Brice Swyre</td>
						<td> Tax Accountant </td>
						<td> 21 </td>
					</tr>
				</tbody>
			</Table>
		</div>
	</div>
</SampleWrapper>
