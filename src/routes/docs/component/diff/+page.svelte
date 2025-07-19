<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import CountDownBoxColorsExample from '$lib/DocsComponent/Samples/CountDown/CountDownBoxColorsExample.svelte';
	import CountDownDefaultExample from '$lib/DocsComponent/Samples/CountDown/CountDownDefaultExample.svelte';
	import CountDownProps from '$lib/DocsComponent/Samples/CountDown/CountDownProps.svelte';
	import CountDownSizesExample from '$lib/DocsComponent/Samples/CountDown/CountDownSizesExample.svelte';
	import CountDownTextColorsExample from '$lib/DocsComponent/Samples/CountDown/CountDownTextColorsExample.svelte';
	import CountDownTypesExample from '$lib/DocsComponent/Samples/CountDown/CountDownTypesExample.svelte';
	import DiffAspectExample from '$lib/DocsComponent/Samples/Diff/DiffAspectExample.svelte';
	import DiffDefaultExample from '$lib/DocsComponent/Samples/Diff/DiffDefaultExample.svelte';
	import DiffProps from '$lib/DocsComponent/Samples/Diff/DiffProps.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>Diff</h1>
	</div>
	<DiffProps />
	<Title id="diff" title="Diff" />
	<DiffDefaultExample />
	<Title id="diff-aspect" title="Diff Aspect" />
	<DiffAspectExample />
	<div class="py-10"></div>
</div>
