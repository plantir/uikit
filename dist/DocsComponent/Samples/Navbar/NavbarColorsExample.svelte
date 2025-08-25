<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Navbar from '../../../components/Navbar/Navbar.svelte';
	import Button from '../../../components/Button/Button.svelte';
	import TextField from '../../../components/TextField/TextField.svelte';
	import type { GlobalColor } from '../../../utils/El.types.js';
	let colors: GlobalColor[] = [
		'primary',
		'secondary',
		'accent',
		'success',
		'warning',
		'info',
		'error',
		'neutral'
	];
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Navbar</span> from '{$importDocumentSrc}/Navbar.svelte';
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
			import <span class="text-green-600">TextField</span> from '{$importDocumentSrc}/TextField.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		{#each colors as color}
			<TagCode name="Navbar" props={[`color="${color}"`]}>
				<TagCode name="div" props={['slot="start"']}>
					<TagCode name="Button">Logo</TagCode>
				</TagCode>
				<TagCode name="div" props={['slot="center"', 'class="flex items-center gap-2"']}>
					<TagCode name="a">Home</TagCode>
					<TagCode name="a">Products</TagCode>
					<TagCode name="a">ContactUs</TagCode>
				</TagCode>
				<TagCode name="div" props={['slot="end"']}>
					<TagCode name="TextField" props={['placeholder="search ..."']}></TagCode>
				</TagCode>
			</TagCode>
		{/each}
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center gap-4 flex-col">
			{#each colors as color}
				<Navbar class="bg-base-100 shadow-sm" {color}>
					<div slot="start">
						<Button>Logo</Button>
					</div>
					<div slot="center" class="flex items-center gap-2">
						<a href="">Home</a>
						<a href="">Products</a>
						<a href="">ContactUs</a>
					</div>
					<div slot="end">
						<TextField placeholder="search ..." />
					</div>
				</Navbar>
			{/each}
		</div>
	</div>
</SampleWrapper>
