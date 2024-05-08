<script>
	import Button from "$lib/components/Button/Button.svelte";
	import DataTable from "$lib/components/DataTable/DataTable.svelte";
	import TableColumn from "$lib/components/DataTable/TableColumn.svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";

    const items = [1, 2, 3, 4]

</script>

<h1>Simple</h1>
<div class="relative p-4 bg-gray-100 border">
    <DataTable {items} let:item>
        <TableColumn name="name">First {item}</TableColumn>
        <TableColumn name="email">first{item}@gmail.com</TableColumn>
        <TableColumn name="">
            <Button shape="square">
                <Icon name="DeleteMinor"/>
            </Button>
            <Button shape="square">
                <Icon name="EditMinor"/>
            </Button>    
        </TableColumn>
    </DataTable>

</div>