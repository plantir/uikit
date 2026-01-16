<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import FileInputColorsExample from '$lib/DocsComponent/Samples/FileInput/FileInputColorsExample.svelte';
	import FileInputCustomExample from '$lib/DocsComponent/Samples/FileInput/FileInputCustomExample.svelte';
	import FileInputDefaultExample from '$lib/DocsComponent/Samples/FileInput/FileInputDefaultExample.svelte';
	import FileInputProps from '$lib/DocsComponent/Samples/FileInput/FileInputProps.svelte';
	import FileInputSizesExample from '$lib/DocsComponent/Samples/FileInput/FileInputSizesExample.svelte';
</script>

<div>
	<div class="component-wrapper">
		<h1>File Input</h1>
		<p>File Input is a an input field for uploading files.</p>
	</div>
	<FileInputProps />
	<Title id="default" title="File input" />
	<FileInputDefaultExample />
	<Title id="sizes" title="FileInput Sizes" />
	<FileInputSizesExample />
	<Title id="colors" title="FileInput Colors" />
	<FileInputColorsExample />
    <Title id="custom" title="FileInput Custom" />
	<FileInputCustomExample />
	<div class="py-10"></div>
</div>
