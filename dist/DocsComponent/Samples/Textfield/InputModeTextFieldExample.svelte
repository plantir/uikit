<script lang="ts">
	import Button from '../../../components/Button/Button.svelte';
	import ScriptCode from '../../ComponentCode/ScriptCode.svelte';
	import ShowCode from '../../ComponentCode/ShowCode.svelte';
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import SimpleCode from '../../ComponentCode/SimpleCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import { onMount } from 'svelte';
	import TabItem from '../../../components/Tabs/TabItem.svelte';
	import Tabs from '../../../components/Tabs/Tabs.svelte';
	import TextField from '../../../components/TextField/TextField.svelte';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<pre>
            <ScriptCode>
                import TextField from '{$importDocumentSrc}/TextField.svelte';
            </ScriptCode>
        </pre>
	</div>
	<div slot="html">
		<TagCode name="TextField" props={['inputmode="none"', 'label="none"']}></TagCode>
		<TagCode name="TextField" props={['inputmode="tel"', 'label="tel"']}></TagCode>
		<TagCode name="TextField" props={['inputmode="url"', 'label="url"']}></TagCode>
		<TagCode name="TextField" props={['inputmode="email"', 'label="email"']}></TagCode>
		<TagCode name="TextField" props={['inputmode="numeric"', 'label="numeric"']}></TagCode>
		<TagCode name="TextField" props={['inputmode="decimal"', 'label="decimal"']}></TagCode>
		<TagCode name="TextField" props={['inputmode="search"', 'label="search"']}></TagCode>
		<TagCode name="TextField" props={['inputmode="text"', 'label="default-text"']}></TagCode>
	</div>
	<div slot="preview">
		<div class="flex flex-wrap gap-4">
			<TextField inputmode="none" label="none"></TextField>
			<TextField inputmode="tel" label="tel"></TextField>
			<TextField inputmode="url" label="url"></TextField>
			<TextField inputmode="email" label="email"></TextField>
			<TextField inputmode="numeric" label="numeric"></TextField>
			<TextField inputmode="decimal" label="decimal"></TextField>
			<TextField inputmode="search" label="search"></TextField>
			<TextField inputmode="text" label="text"></TextField>
		</div>
	</div>
</SampleWrapper>

