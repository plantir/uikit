<script>
	import Select from "./components/Select/Select.svelte";
	import { Button } from "./index.ts";

	let { src, meta, example, code } = $props();

	$inspect('Example wrapper: ', { src, meta, example, code });

	let mode = $state('preview');
	let theme = $state('fluent');

	const themes = [
		{value: "fluent", title: "Fluent"},
		{value: "polaris", title: "Polaris"},
		{value: "fluent-dark", title: "Fluent Dark"},
		{value: "fluent-dark", title: "Fluent Dark"},
		{value: "fluent-dark", title: "Fluent Dark"},
		{value: "fluent-dark", title: "Fluent Dark"},
		{value: "fluent-dark", title: "Fluent Dark"},
	]

    let githubUrl = $derived(`https://github.com/plantir/uikit/blob/main${meta.filename}`)
</script>



<div class="component-wrapper">
	<div class="border p-2 border-b-0 rounded-t-xl flex justify-between items-center border-base-300 bg-base-200">
		<div class="flex gap-2">
            <Button size="sm" variant={mode === 'code' ? null : "ghost"} color='primary' onclick={() => mode = 'code'}>
                Code
            </Button>
            <Button size="sm" variant={mode === 'preview' ? null : "ghost"} color='primary' onclick={() => mode = 'preview'}>
                Preview
            </Button>
		</div>
		<div class="flex gap-2">
			<Select bind:value={theme} items={[{value: "fluent", title: "Fluent"}, {value: "fluent-dark", title: "Fluent Dark"}, {value: "fluent-dark", title: "Fluent Dark"}]} />
            <Button href={githubUrl} class="p-2" shape="square">
                <img src="/github.svg"/>
            </Button>
		</div>
	</div>
	<div class="border border-base-300 rounded-b-xl">
		{#if mode === 'preview'}
			<div data-theme={theme} class="p-16 flex items-center flex-col justify-center">
                <div>
                    {@render example()}
                </div>
			</div>
		{:else}
			<pre><code>{@render code()}</code></pre>
		{/if}
	</div>
</div>
