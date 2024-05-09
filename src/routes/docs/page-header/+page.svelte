<script>
	import Button from "$lib/components/Button/Button.svelte";


    import Page from "$lib/components/Page/Page.svelte";
	import PageHeader from "$lib/components/Page/PageHeader.svelte";

</script>

<Page>
    <PageHeader title="Hello World" back subtitle="this is subtitle">
        <Button>Remove</Button>
        <Button>Add</Button>

    </PageHeader>
</Page>


<Page container={false}>
    <PageHeader title="Hello World" back subtitle="this is subtitle">
        <Button>Remove</Button>
        <Button>Add</Button>

    </PageHeader>
</Page>
