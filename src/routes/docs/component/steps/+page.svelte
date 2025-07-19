<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Steps/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Steps/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Steps/DefaultExample.svelte';
	import ColorsExample from '$lib/DocsComponent/Samples/Steps/ColorsExample.svelte';
	import DisableExample from '$lib/DocsComponent/Samples/Steps/DisableExample.svelte';
	import VerticalExample from '$lib/DocsComponent/Samples/Steps/VerticalExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>Steps</h1>
		<p>Steps can be used to show a list of steps in a process.</p>
	</div>
	<ListOfProps />

	<Title id="setup" title="Setup" />
	<p>Import Steps component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default-steps" title="Default" />
	<p>
		Use the following example of a step indicator element to show a progress of step 2 out of 5.
	</p>
	<DefaultExample />
	<Title id="steps-colors" title="Colors" />
	<p>
		Use these default steps styles with multiple colors to indicate an action or link within your
		website. The default <span class="badge"> color </span>
		is set to <span class="badge">steps</span>. You can change it by using the
		<span class="badge"> color </span> prop.
	</p>
	<ColorsExample />
	<Title id="steps-vertical" title="Vertical" />
	<p>
		Use <span class="badge">vertical</span> prop to change direction of
		<span class="badge">steps</span>. the default option for vertical is
		<span class="badge">false</span>.
	</p>
	<VerticalExample />
	<div class="py-10"></div>
</div>
