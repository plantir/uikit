<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import ShowCode from '$lib/DocsComponent/ComponentCode/ShowCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import SimpleCode from '$lib/DocsComponent/ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import { Switch, Table } from '$lib/index.js';
	let activeTab = 'Preview';
	let form: any = {};
	import SampleWrapper from '../SampleWrapper.svelte';
	import ColorPicker from '$lib/components/ColorPicker/ColorPicker.svelte';
	import LetCode from '$lib/DocsComponent/ComponentCode/LetCode.svelte';
	let colors: any = ['primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'];
	let value = '';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">ColorPicker</span> from '{$importDocumentSrc}/ColorPicker.svelte';
			<br />
			<LetCode name="value" value="" />
		</TagCode>
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex flex-wrap gap-2 md:gap-4"']}>
			<TagCode name="ColorPicker" props={['bind:value']}>
				<TagCode
					name="div"
					props={['class="w-12 h-12 rounded-xl cursor-pointer custom-gradient"']}
					close_self
				/>
			</TagCode>
			<TagCode name="div">
				value is : {'{'}value{'}'}
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-2 md:gap-4">
			<ColorPicker bind:value>
				<div class="w-12 h-12 rounded-xl cursor-pointer custom-gradient"></div>
			</ColorPicker>
			<div>
				value is : {value}
			</div>
		</div>
	</div>
</SampleWrapper>

<style lang="scss">
	@reference "tailwindcss";

	.custom-gradient {
		background: conic-gradient(from 180deg, red, orange, #ff0, green, blue);
	}
</style>
