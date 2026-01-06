<script lang="ts">
	import ScriptCode from '$lib/DocsComponent/ComponentCode/ScriptCode.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import { Badge } from '$lib/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
</script>

<SampleWrapper>
	<pre slot="javascript">
		<ScriptCode>
			import Badge from '{$importDocumentSrc}/Badge.svelte';
		</ScriptCode>
		</pre>
	<div slot="html">
		<TagCode name="p">
			this is a <br />
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode>
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode>
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode>
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode>
			<TagCode name="Badge" one_line props={['dismissable']}>badge</TagCode> inside of a paragraph
		</TagCode>
	</div>
	<p slot="preview">
		this is a
		<Badge dismissable>badge1</Badge>
		<Badge dismissable>badge2</Badge>
		<Badge dismissable>badge3</Badge>
		<Badge dismissable>badge4</Badge>
		<Badge dismissable>badge5</Badge> inside of a paragraph
	</p>
</SampleWrapper>
