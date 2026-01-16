<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Card from '../../../components/Card/Card.svelte';
	import CardBody from '../../../components/Card/CardBody.svelte';
	import CardTitle from '../../../components/Card/CardTitle.svelte';
	import CardActions from '../../../components/Card/CardActions.svelte';
	import type { GlobalColor } from '../../../utils/El.types.js';

	let colors = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error', 'neutral'];
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
		{#each colors as color}
			<TagCode name="Card" props={[`color='${color}''`]}>
				<TagCode name="CardBody">
					<TagCode name="CardTitle">{color} Card</TagCode>
					<TagCode name="p"
						>A card component has a figure, a body part, and inside body there are title and actions
						parts</TagCode
					>
					<TagCode name="CardActions">
						<TagCode name="Button">Buy Now</TagCode>
					</TagCode>
				</TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full flex flex-col gap-4 items-center justify-center">
		{#each colors as color}
			<Card
				color={color as
					| 'error'
					| 'primary'
					| 'secondary'
					| 'accent'
					| 'success'
					| 'warning'
					| 'info'
					| 'neutral'}
				class="w-96"
			>
				<CardBody>
					<CardTitle>{color} Card</CardTitle>
					<p>
						A card component has a figure, a body part, and inside body there are title and actions
						parts
					</p>
					<CardActions>
						<Button>Buy Now</Button>
					</CardActions>
				</CardBody>
			</Card>
		{/each}
	</div>
</SampleWrapper>
