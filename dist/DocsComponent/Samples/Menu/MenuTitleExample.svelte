<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '../../../components/Status/Status.svelte';
	import Menu from '../../../components/Menu/Menu.svelte';
	import MenuItem from '../../../components/Menu/MenuItem.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Menu</span> from '{$importDocumentSrc}/Menu.svelte';
			import <span class="text-green-600">MenuItem</span> from '{$importDocumentSrc}/MenuItem.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Menu" props={['class="bg-base-200 rounded-box"']}>
			<TagCode name="MenuItem">
				<TagCode name="a">item1</TagCode>
			</TagCode>
			<TagCode name="MenuItem">
				<TagCode name="a">item2</TagCode>
			</TagCode>
			<TagCode name="MenuItem">
				<TagCode name="a">item3</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Menu class="bg-base-200 rounded-box" title="title">
				<MenuItem><a href="">item1</a></MenuItem>
				<MenuItem><a href="">item2</a></MenuItem>
				<MenuItem><a href="">item3</a></MenuItem>
			</Menu>
		</div>
	</div>
</SampleWrapper>
