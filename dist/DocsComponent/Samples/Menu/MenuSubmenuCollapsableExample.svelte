<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import Status from '../../../components/Status/Status.svelte';
	import Menu from '../../../components/Menu/Menu.svelte';
	import MenuItem from '../../../components/Menu/MenuItem.svelte';
	import SubMenu from '../../../components/Menu/SubMenu.svelte';
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
				<TagCode name="SubMenu" props={['title="parent"']}>
					<TagCode name="MenuItem"><a href="">item 1.1</a></TagCode>
					<TagCode name="MenuItem"><a href="">item 1.2</a></TagCode>
					<TagCode name="MenuItem">item 1.2</TagCode>
					<TagCode name="MenuItem"><a href="">item 1.4</a></TagCode>
				</TagCode>
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
		<div class="flex justify-center gap-5">
			<div>
				<Menu class="bg-base-200 rounded-box">
					<MenuItem><a href="">item1</a></MenuItem>
					<MenuItem>
						<SubMenu title="parent" collapse>
							<MenuItem><a href="">item 1.1</a></MenuItem>
							<MenuItem><a href="">item 1.2</a></MenuItem>
							<MenuItem>
								<SubMenu title="parent 2" class="min-w-[120px]" collapse>
									<MenuItem><a href="" >child 2</a></MenuItem>
									<MenuItem><a href="">child 2.1</a></MenuItem>
								</SubMenu>
							</MenuItem>
							<MenuItem><a href="">item 1.4</a></MenuItem>
						</SubMenu>
					</MenuItem>
					<MenuItem><a href="">item2</a></MenuItem>
					<MenuItem><a href="">item3</a></MenuItem>
				</Menu>
			</div>
			<div>
				<Menu class="bg-base-200 rounded-box" horzintal>
					<MenuItem><a href="">item1</a></MenuItem>
					<MenuItem>
						<SubMenu title="parent" collapse>
							<MenuItem><a href="">item 1.1</a></MenuItem>
							<MenuItem><a href="">item 1.2</a></MenuItem>
							<MenuItem>
								<SubMenu title="parent 2" class="min-w-[120px]" collapse>
									<MenuItem><a href="">child 2</a></MenuItem>
									<MenuItem><a href="">child 2.1</a></MenuItem>
								</SubMenu>
							</MenuItem>
							<MenuItem><a href="">item 1.4</a></MenuItem>
						</SubMenu>
					</MenuItem>
					<MenuItem><a href="">item2</a></MenuItem>
					<MenuItem><a href="">item3</a></MenuItem>
				</Menu>
			</div>
		</div>
	</div>
</SampleWrapper>
