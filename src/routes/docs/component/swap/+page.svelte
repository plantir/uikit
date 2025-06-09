<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Swap/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Swap/DefaultExample.svelte';
	import RotateExample from '$lib/DocsComponent/Samples/Swap/RotateExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Swap</h1>
	<p>
		Swap allows you to toggle the visibility of two elements using a checkbox or a class name.
	</p>
	<Title id="default-swiper" title="Default" />
	<p>
		Get started with the default swiper component example as a checkbox element to receive a true or
		false selection from the user.
	</p>
	<DefaultExample />
	<Title id="Swiper-SwapRotate" title="Swap Rotate" />
	<RotateExample />
	<Title id="tabs-props" title="Props" />
	<p>this is the list of the props that Swiper can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
