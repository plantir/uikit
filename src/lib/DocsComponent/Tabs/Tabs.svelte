<script lang="ts">
	import { Button } from '$lib/index.js';

	export let tabs: any;
	export let active = 0;
	function changeActive(index: any) {
		active = index;
	}
</script>

<div>
	<div class="w-max">
		{#each tabs as tab, index}
			<Button class="!rounded-none" on:click={() => changeActive(index)}>{tab}</Button>
		{/each}
	</div>
	<div class="border rounded-xl rounded-tl-none">
		<slot />
	</div>
</div>