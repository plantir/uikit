<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Collapse/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Collapse/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Collapse/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Collapse/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Collapse/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Collapse/SizesExample.svelte';
	import IndeterminateExample from '$lib/DocsComponent/Samples/Collapse/IndeterminateExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Collapse</h1>
	<p>
		Get started with the Collapse component to allow the user to create a accordion. collpase useage
		for question and answer and in forms and every elemnt you want to build
	</p>
	<div class="line"></div>
	<p>
		The Collapse component can be used to show a title and a description about it in many shapes and colors.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Collapse component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default" title="Default" />
	<DefaultExample />
	<Title id="colors" title="Colors" />
	<p>
		Use these default Collapse styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">Collapse</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="Open" title="Open" />
	<p>Use Open prop to create a collapse opened default element.</p>
	<SizesExample />
	<Title id="Collapse-disable" title="Disabled" />
	<p>
		Use <span class="badge">disabled</span> prop to change Collapse to a disable
		<span class="badge">Collapse</span>. you can disabled one item or all item.
	</p>
	<DisableExample />
	<Title id="Plus" title="Plus Icon" />
	<p>Use this Icons example of a Collapse element. you can use plus and minus icon instead an arrow icon</p>
	<IndeterminateExample />
	<Title id="Collapse-props" title="Props" />
	<p>this is the list of the props that Collapse can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
