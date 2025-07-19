<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import CardBody from '$lib/components/Card/CardBody.svelte';
	import CardTitle from '$lib/components/Card/CardTitle.svelte';
	import CardActions from '$lib/components/Card/CardActions.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Card</span> from '{$importDocumentSrc}/Card.svelte';
			import <span class="text-green-600">CardTitle</span> from '{$importDocumentSrc}/CardTitle.svelte';
			import <span class="text-green-600">CardBody</span> from '{$importDocumentSrc}/CardBody.svelte';
			import <span class="text-green-600">CardActions</span> from '{$importDocumentSrc}/CardActions.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Card" props={['side']}>
			<TagCode name="figure">
				<TagCode name="img" props={[`src="your image url"`]} close_self></TagCode>
			</TagCode>
			<TagCode name="CardBody">
				<TagCode name="CardTitle">full image Card</TagCode>
				<TagCode name="p"
					>A card component has a figure, a body part, and inside body there are title and actions
					parts</TagCode
				>
				<TagCode name="CardActions">
					<TagCode name="Button" props={['color="primary"']}>Buy Now</TagCode>
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full flex flex-col gap-4 items-center justify-center">
		<Card side class="">
			<figure>
				<img src="/shoes.webp" />
			</figure>
			<CardBody>
				<CardTitle>full image Card</CardTitle>
				<p>
					A card component has a figure, a body part, and inside body there are title and actions
					parts
				</p>
				<CardActions>
					<Button color="primary">Buy Now</Button>
				</CardActions>
			</CardBody>
		</Card>
	</div>
</SampleWrapper>
