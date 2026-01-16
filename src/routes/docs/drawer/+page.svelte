<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';
	let open = false;
</script>

<div>
	<div class="w-screen h-screen bg-green-600 flex justify-center items-center">
		<Button on:click={() => (open = !open)}>open Drawer</Button>
	</div>
	<!-- <Drawer bind:open>
		<ul class="daisy-menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</Drawer> -->
	<Drawer transitionType="slide" right bind:open>
		<ul class="daisy-menu w-full p-4 min-h-full bg-base-200 text-base-content">
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</Drawer>
</div>
