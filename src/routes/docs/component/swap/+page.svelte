<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Swap/ListOfProps.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Swap/DefaultExample.svelte';
	import RotateExample from '$lib/DocsComponent/Samples/Swap/RotateExample.svelte';
	import FlipExample from '$lib/DocsComponent/Samples/Swap/FlipExample.svelte';
	import SlotExmaple from '$lib/DocsComponent/Samples/Swap/SlotExmaple.svelte';
</script>

<div class="component-wrapper">
	<h1>Swap</h1>
	<p>Swap allows you to toggle the visibility of two elements using a checkbox or a class name.</p>
	<Title id="default-Swap" title="Default" />
	<DefaultExample />
	<Title id="Swap-SwapRotate" title="Swap Rotate" />
	<RotateExample />
	<Title id="Swap-SwapFlip" title="Swap Flip" />
	<FlipExample />
	<Title id="Swap-SwapSlot" title="Swap Slot" />
	<SlotExmaple />
	<Title id="tabs-props" title="Props" />
	<p>this is the list of the props that Swap can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
