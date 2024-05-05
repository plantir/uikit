<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Dialog from '$lib/components/Dialog/Dialog.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import ChangeTheme from './ChangeTheme.svelte';

	let themedialog = false;
	onMount(() => {
		themeChange(false);
	});
</script>

<div
	class="
bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]
"
>
	<div class="navbar">
		<div class="flex flex-1 gap-1 lg:gap-2">
			<Button shape="square" variant="ghost">
				<svg
					width="20"
					height="20"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path></svg
				>
			</Button>
			<Button href="/">Logo</Button>
			<div class="max-w-sm w-full">
				<TextField placeholder="Search..." class="w-full"></TextField>
			</div>
		</div>
		<div class="flex gap-1 lg:gap-2">
			<Button href="/docs/component/button">Components</Button>
			<Button
				on:click={() => {
					themedialog = true;
				}}>Themes</Button
			>
		</div>
	</div>
</div>
<Drawer bind:open={themedialog} right>
	<ChangeTheme />
</Drawer>

<style lang="scss">
	.navbar {
		@apply px-4 flex h-full items-center gap-1 justify-between w-full;
	}
</style>
