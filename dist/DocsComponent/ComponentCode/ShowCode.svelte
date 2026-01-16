<script lang="ts">
	import { Button } from '../../index.js';
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
	let copy = false;
	async function copyCode() {
		let text = code.innerText;
		try {
			await navigator.clipboard.writeText(text);
			copy = true;
			setTimeout(() => {
				copy = false;
			}, 3000);
		} catch (error) {}
	}
</script>

{#if loading}
	<div class="w-full h-[200px] bg-base-200 rounded-xl rounded-tl-none"></div>
{/if}
<div class:hidden={loading} class="relative">
	<Button on:click={copyCode} class="absolute top-4 right-6 z-10">{copy ? 'copied' : 'copy'}</Button>
	<div
		class="bg-base-200 p-4 rounded-xl relative rounded-tl-none min-h-[200px] max-h-[350px] overflow-y-auto max-w-full overflow-x-auto"
	>
		<code bind:this={code} class="language-{language}">
			<slot />
		</code>
	</div>
	<!-- {#if copy}
		<div class="absolute -top-10 bg-primary/5 p-2 rounded-xl right-2 text-sm">
			Copied
		</div>
	{/if} -->
</div>

<style global>code {
  white-space: pre-line;
}
code .hljs-tag {
  display: flex;
  @apply -ml-4;
}
code .hljs-tag .hljs-attr {
  @apply pl-2;
}

.hljs {
  @apply bg-transparent;
}</style>
