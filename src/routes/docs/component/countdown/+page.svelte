<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import CountDownBoxColorsExample from '$lib/DocsComponent/Samples/CountDown/CountDownBoxColorsExample.svelte';
	import CountDownDefaultExample from '$lib/DocsComponent/Samples/CountDown/CountDownDefaultExample.svelte';
	import CountDownProps from '$lib/DocsComponent/Samples/CountDown/CountDownProps.svelte';
	import CountDownSizesExample from '$lib/DocsComponent/Samples/CountDown/CountDownSizesExample.svelte';
	import CountDownTextColorsExample from '$lib/DocsComponent/Samples/CountDown/CountDownTextColorsExample.svelte';
	import CountDownTypesExample from '$lib/DocsComponent/Samples/CountDown/CountDownTypesExample.svelte';
</script>

<div class="pb-10">
	<div class="component-wrapper">
		<h1>CountDown</h1>
	</div>
	<CountDownProps />
	<Title id="CountDown" title="CountDown" />
	<CountDownDefaultExample />
	<Title id="countdown-types" title="CountDown Types" />
	<CountDownTypesExample />
	<Title id="countdown-sizes" title="CountDown Sizes" />
	<CountDownSizesExample />
	<Title id="countdown-box-colors" title="CountDown Box Colors" />
	<CountDownBoxColorsExample />
	<Title id="countdown-text-colors" title="CountDown Text Colors" />
	<CountDownTextColorsExample />
	<div class="py-10"></div>
</div>
