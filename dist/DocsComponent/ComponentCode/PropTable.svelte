<script lang="ts">
	import Badge from '../../components/Badge/Badge.svelte';

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
					<td class="  w-1/5 py-1">{item.name}</td>
					<td class="  w-3/5 py-1">
						<div class="flex flex-wrap gap-2 items-center justify-center">
							{#each item.type.split(' | ') as type}
							<Badge color="primary">
								{type}
							</Badge>
							{/each}
						</div>
					</td>
					<td class="  w-1/5 py-1">{item.default}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>@reference "$lib/css/app.css";
table {
  @apply w-full;
}
table thead th {
  @apply h-8 md:h-12 text-sm text-base-content/60;
}
table thead th:first-child {
  @apply rounded-l-lg;
}
table thead th:last-child {
  @apply rounded-r-lg;
}
table tbody tr:first-child td {
  @apply border-none;
}
table tbody td {
  @apply h-12 text-center border-t border-base-200;
}</style>
