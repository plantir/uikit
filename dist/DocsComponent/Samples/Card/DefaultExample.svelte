<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import { Avatar, Badge, Checkbox, Radio, RadioGroup, Range, Switch, Table } from '../../../index.js';
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
		<TagCode name="Card" props={[`class="w-96"`]}>
            <TagCode name="figure">
                <TagCode name="img" props={['src="/shoes.webp"', 'alt="Card Image"']} />
            </TagCode>
			<TagCode name="CardBody">
				<TagCode name="CardTitle">Card Title</TagCode>
				<TagCode name="p">Card Content</TagCode>
				<TagCode name="CardActions">
					<TagCode name="Button">Action 1</TagCode>
					<TagCode name="Button">Action 2</TagCode>
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full flex items-center justify-center">
		<Card class="w-96">
            <figure>
                <img src="/shoes.webp" alt="Card Image" />
            </figure>
			<CardBody>
				<CardTitle>Card Title</CardTitle>
				<p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
				<CardActions>
					<Button color="primary">Buy Now</Button>
				</CardActions>
			</CardBody>
		</Card>
	</div>
</SampleWrapper>
