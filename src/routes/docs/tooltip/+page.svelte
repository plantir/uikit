<script>
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tooltip from '$lib/components/Tooltip/Tooltip.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	let selected = '2';
</script>

<div class="p-12 mx-auto">
    <Button>Delete</Button>
    <Tooltip>Delete the item</Tooltip>

    <Button>Delete</Button>
    <Tooltip placement="right">Delete the item</Tooltip>

    
    <!-- <Tooltip>
        <Button slot="toggler">Delete</Button>
        Delete the item
    </Tooltip> -->

</div>
