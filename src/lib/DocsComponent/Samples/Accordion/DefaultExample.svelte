<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Accordion</span> from '{$importDocumentSrc}/Accordion.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Accordion" props={['title="accordion title 1"', 'name="accordion-default"']}>
			accordion content sample
		</TagCode>
		<TagCode name="Accordion" props={['title="accordion title 2"', 'name="accordion-default"']}>
			accordion content sample
		</TagCode>
		<TagCode name="Accordion" props={['title="accordion title 3"', 'name="accordion-default"']}>
			accordion content sample
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<Accordion title="accordion title 1" name="accordion-default"
			>accordion content sample</Accordion
		>
		<Accordion title="accordion title 2" name="accordion-default"
			>accordion content sample</Accordion
		>
		<Accordion title="accordion title 3" name="accordion-default"
			>accordion content sample</Accordion
		>
	</div>
</SampleWrapper>
