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
					<td class="w-1/5">{item.name}</td>
					<td class="w-3/5">{item.type}</td>
					<td class="w-1/5">{item.default}</td>
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
