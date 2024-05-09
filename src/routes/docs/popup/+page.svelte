<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Popup from '$lib/components/Popup/Popup.svelte';
</script>

<div class="p-6 gap-y-4 flex flex-col justify-center">
	<div class="flex items-center gap-x-1">
		<Popup >
			<Button slot="toggler">open popup</Button>
			Add product
		</Popup>
	</div>
</div>
