<script lang="ts">
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import RadialProgress from '../../../components/RadialProgress/RadialProgress.svelte';
	import Skeleton from '../../../components/Skeleton/Skeleton.svelte';
	import Toast from '../../../components/Toast/Toast.svelte';
	import Alert from '../../../components/Alert/Alert.svelte';
	import Button from '../../../components/Button/Button.svelte';
	import Fieldset from '../../../components/Fieldset/Fieldset.svelte';
	import TextField from '../../../components/TextField/TextField.svelte';
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
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode
			name="Fieldset"
			props={['title="form"', 'class="bg-base-200 border border-base-300 p-4 rounded-box w-xs"']}
		>
			<TagCode
				name="TextField"
				props={['label="username"', 'placeholder="pplease enter your username"']}
			></TagCode>
			<TagCode
				name="TextField"
				props={['label="password"', 'type="password"', 'placeholder="pplease enter your password"']}
			></TagCode>
			<TagCode name="Button" props={['color="primary"', 'block', 'class="mt-4"']}>Login</TagCode>
		</TagCode>
	</div>
	<div slot="preview">
		<Fieldset title="Login" class="bg-base-200 border border-base-300 p-4 rounded-box w-xs">
			<TextField label="username" placeholder="pplease enter your username"></TextField>
			<TextField label="password" type="password" placeholder="pplease enter your email"
			></TextField>
			<Button color="primary" class="mt-4" block>Login</Button>
		</Fieldset>
	</div>
</SampleWrapper>
