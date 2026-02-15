<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Dialog from '$lib/components/Dialog/Dialog.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import ChangeTheme from './ChangeTheme.svelte';
	import Menu from './Menu.svelte';

	let themedialog = false;
	let menu = false;
	onMount(() => {
		themeChange(false);
	});
	function openMenu() {
		console.log('openMenu');
		menu = true;
	}
</script>

<div
	class="
bg-base-100/90 text-base-content fixed top-0 z-30 max-w-[100rem] right-1/2 translate-x-1/2 flex h-16 w-full justify-center backdrop-blur-sm transition-shadow duration-100 [transform:translate3d(0,0,0)]
"
>
	<div class="navbar">
		<div class="flex flex-1 gap-1 lg:gap-2">
			<Button shape="square" variant="ghost" onclick={openMenu}>
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
			<div class="hidden md:block max-w-sm w-full">
				<TextField placeholder="Search..." class="w-full"></TextField>
			</div>
		</div>
		<div class="flex gap-1 lg:gap-2">
			<Button href="/docs/component/button" class="hidden md:flex">Components</Button>
			<Button
				onclick={() => {
					themedialog = true;
				}}
			>
				<span class="hidden md:block">Themes</span>
				<span class="block md:hidden">
					<svg
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="h-5 w-5 stroke-current md:hidden"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
						></path></svg
					>
				</span>
			</Button>
		</div>
	</div>
</div>
<Drawer bind:open={themedialog} right>
	<ChangeTheme
		on:change={() => {
			themedialog = false;
		}}
	/>
</Drawer>
<Drawer bind:open={menu} left>
	<Menu
		on:close={() => {
			console.log('omad into ?');
			menu = false;
		}}
	/>
</Drawer>

<style lang="scss">
	@reference "tailwindcss";

	.navbar {
		@apply px-4 flex h-full items-center gap-1 justify-between w-full;
	}
</style>
