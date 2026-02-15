<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CountDown from '$lib/components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import Diff from '$lib/components/Diff/Diff.svelte';
	import SnippetTagCode from '$lib/DocsComponent/ComponentCode/SnippetTagCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Diff</span> from '{$importDocumentSrc}/Diff.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="div" props={['class="flex flex-col gap-4 items-center justify-center"']}>
			<TagCode name="div" props={['class="text-center"']}>Aspect 16/9</TagCode>
			<TagCode name="Diff" props={['aspect="16/9"']}>
				<SnippetTagCode name="item1">
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</SnippetTagCode>
				<SnippetTagCode name="item2">
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</SnippetTagCode>
			</TagCode>
			<TagCode name="div" props={['class="text-center"']}>Aspect 4/3</TagCode>
			<TagCode name="Diff" props={['aspect="4/3"']}>
				<SnippetTagCode name="item1">
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</SnippetTagCode>
				<SnippetTagCode name="item2">
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</SnippetTagCode>
			</TagCode>
			<TagCode name="div" props={['class="text-center"']}>Aspect 1/1</TagCode>
			<TagCode name="Diff" props={['aspect="1/1"']}>
				<SnippetTagCode name="item1">
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</SnippetTagCode>
				<SnippetTagCode name="item2">
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</SnippetTagCode>
			</TagCode>
			<TagCode name="div" props={['class="text-center"']}>Aspect Custom</TagCode>
			<TagCode name="Diff" props={['class="aspect-3/2"']}>
				<SnippetTagCode name="item1">
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</SnippetTagCode>
				<SnippetTagCode name="item2">
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</SnippetTagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col gap-4 items-center justify-center">
			<div class="text-center">Aspect 16/9</div>
			<div class="w-[350px]">
				<Diff aspect="16/9">
					{#snippet item1()}
						<div
							class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					{/snippet}
					{#snippet item2()}
						<div
							class="w-full h-full bg-primary-content text-primary flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					{/snippet}
				</Diff>
			</div>
			<div class="text-center">Aspect 4/3</div>
			<div class="w-[350px]">
				<Diff aspect="4/3">
					{#snippet item1()}
						<div
							class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					{/snippet}
					{#snippet item2()}
						<div
							class="w-full h-full bg-primary-content text-primary flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					{/snippet}
				</Diff>
			</div>
			<div class="text-center">Aspect 1/1</div>
			<div class="w-[350px]">
				<Diff aspect="1/1">
					{#snippet item1()}
						<div
							class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					{/snippet}
					{#snippet item2()}
						<div
							class="w-full h-full bg-primary-content text-primary flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					{/snippet}
				</Diff>
			</div>
			<div class="text-center">Aspect Custom</div>
			<div class="w-[350px]">
				<Diff class="aspect-3/2">
					{#snippet item1()}
						<div
							class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					{/snippet}
					{#snippet item2()}
						<div
							class="w-full h-full bg-primary-content text-primary flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					{/snippet}
				</Diff>
			</div>
		</div>
	</div>
</SampleWrapper>
