<script lang="ts">
	export let items: any = [];
</script>

<div>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Default</th>
			</tr>
		</thead>
		<tbody>
			{#each items as item}
				<tr>
					<td>{item.name}</td>
					<td>{item.type}</td>
					<td>{item.default}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	table {
        @apply w-full;
		thead {
			th {
				@apply bg-gray-200 h-16;
			}
		}
        tbody{
            td{
                @apply bg-gray-100 h-12 text-center;
            }
        }
	}
</style>
