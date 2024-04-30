<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Avatar/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Avatar/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Avatar/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Avatar/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Avatar/DisableExample.svelte';
	import SizesExample from '$lib/DocsComponent/Samples/Avatar/SizesExample.svelte';
	import DotsExample from '$lib/DocsComponent/Samples/Avatar/DotsExample.svelte';
	import OutlineExample from '$lib/DocsComponent/Samples/Avatar/OutlineExample.svelte';
	import GhostExample from '$lib/DocsComponent/Samples/Avatar/GhostExample.svelte';
	import ShapesExample from '$lib/DocsComponent/Samples/Avatar/ShapesExample.svelte';
	import MaskExample from '$lib/DocsComponent/Samples/Avatar/MaskExample.svelte';
	import RingExample from '$lib/DocsComponent/Samples/Avatar/RingExample.svelte';
	import OnlineExample from '$lib/DocsComponent/Samples/Avatar/OnlineExample.svelte';
	import OfflineExample from '$lib/DocsComponent/Samples/Avatar/OfflineExample.svelte';
	import GroupsExample from '$lib/DocsComponent/Samples/Avatar/GroupsExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Avatar</h1>
	<p>
		Use the avatar component to show a visual representation of a user profile using an image
		element or SVG object based on multiple styles and sizes
	</p>
	<div class="line"></div>
	<p>
		The avatar component can be used as a visual identifier for a user profile on your website and
		you can use the examples from Flowbite to modify the styles and sizes of these components using
		the utility classes from Tailwind CSS.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import a Avatar component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default" title="Default" />
	<DefaultExample />
	<Title id="colors" title="Colors" />
	<p>
		Use these default Avatar styles with multiple colors to indicate an action or link within your
		website. The default <span class="Avatar"> color </span>
		is set to <span class="Avatar">Avatar</span>. You can change it by using the
		<span class="Avatar"> color </span> prop.
	</p>
	<p>
		Avatar colors only works with <span class="badge">Text</span> or <span class="badge">Ring</span>
	</p>
	<ColorsExample />
	<Title id="size" title="Sizes" />
	<p>
		Use <span class="Avatar">size</span> prop to change size of a
		<span class="Avatar">Avatar</span>. default size option for size is
		<span class="Avatar">md</span>.
	</p>
	<SizesExample />
	<Title id="Shapes" title="Shapes" />
	<p>
		Use <span class="Avatar">shape</span> prop to change shape of
		<span class="Avatar">Avatar</span>. the default shape is <span class="badge">square</span>
	</p>
	<ShapesExample />
	<Title id="Masks" title="Masks" />
	<p>
		Use <span class="Avatar">mask</span> prop to add a mask to
		<span class="Avatar">Avatar</span>. there is no default for mask prop.
	</p>
	<MaskExample />
	<Title id="Ring" title="Ring" />
	<p>Use this Ring examples of a Avatar element.</p>
	<RingExample />
	<Title id="Online" title="Online" />
	<p>Use this Online examples of a Avatar element.</p>
	<OnlineExample />
	<Title id="Offline" title="Offline" />
	<p>Use this Offline examples of a Avatar element.</p>
	<OfflineExample />
	<Title id="Groups" title="Groups" />
	<p>Use AvatarGroups to make a list of avatars.groups only shows in circle mode</p>
	<GroupsExample />
	<Title id="Avatar-props" title="Props" />
	<p>this is the list of the props that Avatar can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
