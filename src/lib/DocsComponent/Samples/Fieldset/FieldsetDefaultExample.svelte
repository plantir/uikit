<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '$lib/components/RadialProgress/RadialProgress.svelte';
	import Skeleton from '$lib/components/Skeleton/Skeleton.svelte';
	import Toast from '$lib/components/Toast/Toast.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Fieldset from '$lib/components/Fieldset/Fieldset.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	let show = $state(false);
	const showToast = () => {
		show = true;
		setTimeout(() => {
			show = false;
		}, 2000);
	};
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Fieldset</span> from '{$importDocumentSrc}/Fieldset.svelte';
			import <span class="text-green-600">TextField</span> from '{$importDocumentSrc}/TextField.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode
			name="Fieldset"
			props={['title="form"', 'class="bg-base-200 border border-base-300 p-4 rounded-box w-xs"']}
		>
			<TagCode name="TextField" props={['label="name"', 'placeholder="pplease enter your name"']}
			></TagCode>
			<TagCode name="TextField" props={['label="email"', 'placeholder="pplease enter your email"']}
			></TagCode>
			<TagCode name="TextField" props={['label="phone"', 'placeholder="pplease enter your phone"']}
			></TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Fieldset title="form" class="bg-base-200 border border-base-300 p-4 rounded-box w-xs">
			<TextField label="name" placeholder="pplease enter your name"></TextField>
			<TextField label="email" placeholder="pplease enter your email"></TextField>
			<TextField label="phone" placeholder="pplease enter your phone"></TextField>
		</Fieldset>
	</div>
</SampleWrapper>
