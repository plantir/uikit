<script lang="ts">
	import { Button } from '$lib/index.js';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github.css';
	import { onMount } from 'svelte';
	let code: any = '';
	let loading = true;
	export let language: any = 'auto';
	onMount(async () => {
		setTimeout(() => {
			document.querySelectorAll('code').forEach((el: any) => {
				hljs.highlightBlock(el);
			});
			loading = false;
		}, 100);
	});
	async function copyCode() {
		let text = code.innerText;
		await navigator.clipboard.writeText(text);
	}
</script>

{#if loading}
	<div class="w-full h-[200px] bg-gray-200  rounded-xl rounded-tl-none"></div>
{/if}
<div class:hidden={loading}>
	<div class="bg-gray-200 p-4 rounded-xl relative rounded-tl-none min-h-[200px]">
		<Button on:click={copyCode} class="absolute top-4 right-4">copy</Button>
		<code bind:this={code} class="language-{language}">
			<slot />
		</code>
	</div>
</div>

<style global lang="scss">
	code {
		white-space: pre-line;
		.hljs-tag {
			display: flex;
			@apply -ml-4;
			.hljs-attr {
				@apply pl-2;
			}
		}
	}
	.hljs {
		@apply bg-transparent;
	}
</style>
