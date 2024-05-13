<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
</script>

<div class="p-6 gap-y-4 flex flex-col justify-center">
	<div class="flex items-center gap-x-1">
		<Dropdown>
			<Button slot="toggler">
				open Dropdown
			</Button>
			Add product
		</Dropdown>
	</div>
</div>
