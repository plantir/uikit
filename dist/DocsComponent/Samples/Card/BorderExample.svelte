<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Card from '../../../components/Card/Card.svelte';
	import CardBody from '../../../components/Card/CardBody.svelte';
	import CardTitle from '../../../components/Card/CardTitle.svelte';
	import CardActions from '../../../components/Card/CardActions.svelte';
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
		{#each ['border', 'dashed'] as border}
			<TagCode name="Card" props={[`${border}`]}>
				<TagCode name="CardBody">
					<TagCode name="CardTitle">{border} Card</TagCode>
					<TagCode name="p"
						>A card component has a figure, a body part, and inside body there are title and actions
						parts</TagCode
					>
					<TagCode name="CardActions">
						<TagCode name="Button" props={['color="primary"']}>Buy Now</TagCode>
					</TagCode>
				</TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full flex flex-col gap-4 items-center justify-center bg-base-100">
		<Card border class="w-96">
			<CardBody>
				<CardTitle>Border Card</CardTitle>
				<p>
					A card component has a figure, a body part, and inside body there are title and actions
					parts
				</p>
				<CardActions>
					<Button color="primary">Buy Now</Button>
				</CardActions>
			</CardBody>
		</Card>
		<Card dashed class="w-96">
			<CardBody>
				<CardTitle>Dashed Card</CardTitle>
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
