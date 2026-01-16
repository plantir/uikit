<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import Menu from '$lib/components/Menu/Menu.svelte';
	import MenuItem from '$lib/components/Menu/MenuItem.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Navbar</span> from '{$importDocumentSrc}/Navbar.svelte';
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
			import <span class="text-green-600">Menu</span> from '{$importDocumentSrc}/Menu.svelte';
			import <span class="text-green-600">MenuItem</span> from '{$importDocumentSrc}/MenuItem.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Navbar" props={['custom', 'class="bg-base-100 shadow-sm"']}>
			<TagCode name="div" props={['class="flex-0 mr-8"']}>
				<TagCode name="Button" props={['shape="circle"', 'size="sm"']}>Icon</TagCode>
			</TagCode>
			<TagCode name="div" props={['class="flex-1 flex items-center gap-4"']}>
				<TagCode name="Button" props={['size="lg"']}>Logo</TagCode>
				<TagCode name="Menu" props={['horzintal']}>
					<TagCode name="MenuItem">
						<TagCode name="a">Home</TagCode>
					</TagCode>
					<TagCode name="MenuItem">
						<TagCode name="a">Products</TagCode>
					</TagCode>
					<TagCode name="MenuItem">
						<TagCode name="a">About</TagCode>
					</TagCode>
				</TagCode>
			</TagCode>
			<TagCode name="div" props={['class="flex-0 flex items-center gap-2"']}>
				<TagCode name="Button" props={['shape="circle"', 'size="sm"']}>Icon</TagCode>
				<TagCode name="Button" props={['shape="circle"', 'size="sm"']}>Icon</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Navbar class="bg-base-100 shadow-sm" custom>
				<div class="flex-0 mr-8">
					<Button shape="circle" size="sm">Icon</Button>
				</div>
				<div class="flex-1 flex items-center gap-4">
					<Button size="lg">Logo</Button>
					<Menu horzintal>
						<MenuItem>
							<a href="">Home</a>
						</MenuItem>
						<MenuItem>
							<a href="">Products</a>
						</MenuItem>
						<MenuItem>
							<a href="">About</a>
						</MenuItem>
					</Menu>
				</div>
				<div class="flex-0 flex items-center gap-2">
					<Button shape="circle" size="sm">Icon</Button>
					<Button shape="circle" size="sm">Icon</Button>
				</div>
			</Navbar>
		</div>
	</div>
</SampleWrapper>
