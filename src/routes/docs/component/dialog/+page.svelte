<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import ListOfProps from '$lib/DocsComponent/Samples/Dialog/ListOfProps.svelte';
	import SetupExample from '$lib/DocsComponent/Samples/Dialog/SetupExample.svelte';
	import DefaultExample from '$lib/DocsComponent/Samples/Dialog/DefaultExample.svelte';
	import ConfirmExample from '$lib/DocsComponent/Samples/Dialog/ConfirmExample.svelte';
</script>

<div class="component-wrapper">
	<h1>Dialog</h1>
	<p>
		The dialog component can be used as an interactive dialog on top of the main content area of the
		website to show notifications and gather information using form elements from your website
		users.
	</p>
	<div class="line"></div>
	<p>
		dialog visibility (open/close) is controlled by the open property. You can bind it to a variable
		that other element (usually button) will toggle. You can also use the open=true attribute to
		show open the dialog by default. Opening and closing the dialog will trigger the show and close
		events.
	</p>
	<Title id="setup" title="Setup" />
	<p>Import Dialog component in the script tag and use it.</p>
	<SetupExample />
	<Title id="default-Dialog" title="Default" />
	<DefaultExample />
	<Title id="confirm-Dialog" title="Confirm Example" />
	<ConfirmExample />
	<Title id="props" title="Props" />
	<p>this is the list of the props that Dialog can have.</p>
	<ListOfProps />
	<div class="py-10"></div>
</div>
