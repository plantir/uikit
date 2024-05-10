<script>
	import Button from "$lib/components/Button/Button.svelte";
	import Card from "$lib/components/Card/Card.svelte";
	import CardActions from "$lib/components/Card/CardActions.svelte";
	import CardBody from "$lib/components/Card/CardBody.svelte";
	import CardTitle from "$lib/components/Card/CardTitle.svelte";
</script>

<div class="p-6 gap-y-8 flex flex-col justify-center">

<h1 class="text-2xl font-bold mt-8 mb-2">Default</h1>
<Card>
    This is default card
</Card>

<h1 class="text-2xl font-bold mt-8 mb-2">Body</h1>
<Card>
    <CardBody>
        This is inside card Body
    </CardBody>
</Card>

<h1 class="text-2xl font-bold mt-8 mb-2">Title</h1>
<Card>
    <CardBody>
        <CardTitle>This is CardTitle</CardTitle>
        This is inside card Body
    </CardBody>
</Card>


<h1 class="text-2xl font-bold mt-8 mb-2">Actions</h1>
<Card>
    <CardBody>
        <CardTitle>This Card Has actions</CardTitle>

        This is card Body

        <CardActions>
            <Button>Cancel</Button>
            <Button color="primary">Submit</Button>
        </CardActions>
    </CardBody>
</Card>
</div>