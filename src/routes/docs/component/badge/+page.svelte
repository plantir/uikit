<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Badge/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Badge/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Badge/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Badge/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Badge/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Badge/SizesExample.svelte';
	import DotsExample from '$lib/DocsComponent/Samples/Badge/DotsExample.svelte';
	import OutlineExample from '$lib/DocsComponent/Samples/Badge/OutlineExample.svelte';
	import GhostExample from '$lib/DocsComponent/Samples/Badge/GhostExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Badge</h1>
	<p>
		Use Tailwind CSS badges as elements to show counts or labels separately or inside other
		components
	</p>
	<div class="line"></div>
	<p>
		The badge component can be used to complement other elements such as buttons or text elements as
		a label or to show the count of a given data, such as the number of comments for an article or
		how much time has passed by since a comment has been made.
	</p>
	<p>Alternatively, badges can also be used as standalone elements that link to a certain page.</p>
	<Title id="setup" title="Setup" />
	<p>Import a Badge component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default" title="Default" />
	<p>
		Use this default example of a badge element in a checked, unchecked and indeterminate state.
	</p>
	<DefaultExample />
	<Title id="colors" title="Colors" />
	<p>
		Use these default Badge styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">Badge</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="Badge-size" title="Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">Badge</span>. default size option for size is
		<span class="badge">md</span>.
	</p>
	<SizesExample />
	<Title id="Badge-disable" title="Dismissable" />
	<p>
		Use <span class="badge">Dismissable</span> prop to delete
		<span class="badge">Badge</span>. you can Dismissable one item or all item.
	</p>
	<DisableExample />
	<Title id="Dots" title="Dots" />
	<p>
		Use this Dots examples of a badge element. Dots badge must have <span class="badge">color</span>
	</p>
	<DotsExample />
	<Title id="Outline" title="Outline" />
	<p>Use this Outline examples of a badge element.</p>
	<OutlineExample />
	<Title id="Ghost" title="Ghost" />
	<p>Use this Ghost examples of a badge element.ghost doesn't get color and if you pass color prop it's not working!</p>
	<GhostExample />
	<Title id="Badge-props" title="Props" />
	<p>this is the list of the props that Badge can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
