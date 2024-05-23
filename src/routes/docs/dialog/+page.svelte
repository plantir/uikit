<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Dialog from '$lib/components/Dialog/Dialog.svelte';
	import DialogHeader from '$lib/components/Dialog/DialogHeader.svelte';
	import DialogBody from '$lib/components/Dialog/DialogBody.svelte';
	import DialogFooter from '$lib/components/Dialog/DialogFooter.svelte';
	let open = true;
	let open2 = false;
</script>

<button on:click={() => open2 = true}>Open</button>
<Dialog {open}>
	<DialogBody>
		Helli
	</DialogBody>
</Dialog>

<Dialog open={open2}>
	<DialogHeader title="Remove 1 product?" />
	<DialogBody>
		This can't be undone.
	</DialogBody>
	<DialogFooter>
		<Button>Cancel</Button>
		<Button color="error">Delete</Button>
	</DialogFooter>
</Dialog>

