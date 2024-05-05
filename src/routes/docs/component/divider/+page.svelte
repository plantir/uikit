<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Divider/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Divider/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Divider/DefaultExample.svelte';
	import PositionExample from '$lib/DocsComponent/Samples/Divider/PositionExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Divider/ColorsExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Divider/SizesExample.svelte';
	import HorzintalExample from '$lib/DocsComponent/Samples/Divider/HorzintalExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Divider</h1>
	<p>
		Create a horizontal line using the `Divider` component to separate content such as paragraphs,
		blockquotes, and other elements
	</p>
	<div class="line"></div>
	<p>
		The Divider component can be used to separate content using a horizontal line by adding space
		between elements based on multiple styles, variants, and layouts.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Divider component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default-Divider" title="Default" />
	<DefaultExample />
	<Title id="Position" title="Position" />
	<p>
		the default position of Divider is middle if you want to change the position you can pass these
		two option :
		<span class="badge">start</span>,
		<span class="badge">end</span>,
	</p>
	<PositionExample />
	<Title id="colors" title="Colors" />
	<p>
		Use these default divider styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">divider</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="size" title="Sizes" />
	<p>
		Use <span class="badge">size</span> prop to change size of a
		<span class="badge">divider</span>. default size option for size is
		<span class="badge">sm</span>.
	</p>
	<SizesExample />
	<Title id="horizontal" title="Horizontal" />
	<p>
		you can use divider in Horizontal builds such as this example.
	</p>
	<HorzintalExample />
	<Title id="props" title="Props" />
	<p>this is the list of the props that Divider can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
