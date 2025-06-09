<script lang="ts">
	export let items: any = [];
</script>

<div>
	<table>
		<thead>
			<tr>
				<th class="bg-base-200">Name</th>
				<th class="bg-base-200">Type</th>
				<th class="bg-base-200">Default</th>
			</tr>
		</thead>
		<tbody>
			{#each items as item}
				<tr>
					<td class=" bg-base-300 w-1/5">{item.name}</td>
					<td class=" bg-base-300 w-3/5">{item.type}</td>
					<td class=" bg-base-300 w-1/5">{item.default}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<style lang="scss">
	@reference "tailwindcss";
	table {
		@apply w-full;
		thead {
			th {
				@apply h-16;
			}
		}
		tbody {
			td {
				@apply h-12 text-center;
			}
		}
	}
</style>
