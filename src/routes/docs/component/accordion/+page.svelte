<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Accordion/DefaultExample.svelte';
	import IconsExample from '$lib/DocsComponent/Samples/Accordion/IconsExample.svelte';
	import OpenExample from '$lib/DocsComponent/Samples/Accordion/OpenExample.svelte';
	import JoinedExample from '$lib/DocsComponent/Samples/Accordion/JoinedExample.svelte';
	import NamedExample from '$lib/DocsComponent/Samples/Accordion/NamedExample.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Accordion/ListOfProps.svelte';
</script>

<div class="component-wrapper">
	<h1>Accordion</h1>
	<p>Accordion is used for showing and hiding content but only one item can stay open at a time.</p>
	<Title id="default" title="Default" />
	<DefaultExample />
	<Title id="icons" title="Icons" />
	<IconsExample />
	<Title id="open" title="Open default" />
	<OpenExample />
	<Title id="join" title="Join" />
	<JoinedExample />
	<Title id="named" title="Named" />
	<p>You can bind Accordion with name prop. this is useful when you want to have multiple accordions on the same page.</p>
	<NamedExample />
	<Title id="Accordion-props" title="Props" />
	<ListOfProps />
	<div class="py-10"></div>
</div>
