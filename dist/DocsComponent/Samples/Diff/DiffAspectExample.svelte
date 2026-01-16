<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CountDown from '../../../components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import Diff from '../../../components/Diff/Diff.svelte';
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
				<TagCode name="div" props={['slot="item-1"']}>
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</TagCode>
				<TagCode name="div" props={['slot="item-2"']}>
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</TagCode>
			</TagCode>
			<TagCode name="div" props={['class="text-center"']}>Aspect 4/3</TagCode>
			<TagCode name="Diff" props={['aspect="4/3"']}>
				<TagCode name="div" props={['slot="item-1"']}>
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</TagCode>
				<TagCode name="div" props={['slot="item-2"']}>
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</TagCode>
			</TagCode>
			<TagCode name="div" props={['class="text-center"']}>Aspect 1/1</TagCode>
			<TagCode name="Diff" props={['aspect="1/1"']}>
				<TagCode name="div" props={['slot="item-1"']}>
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</TagCode>
				<TagCode name="div" props={['slot="item-2"']}>
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</TagCode>
			</TagCode>
			<TagCode name="div" props={['class="text-center"']}>Aspect Custom</TagCode>
			<TagCode name="Diff" props={['class="aspect-3/2"']}>
				<TagCode name="div" props={['slot="item-1"']}>
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</TagCode>
				<TagCode name="div" props={['slot="item-2"']}>
					<TagCode
						name="div"
						props={[
							'class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"'
						]}
					>
						UI Kit
					</TagCode>
				</TagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex flex-col gap-4 items-center justify-center">
			<div class="text-center">Aspect 16/9</div>
			<div class="w-[350px]">
				<Diff aspect="16/9">
					<div slot="item-1">
						<div
							class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					</div>
					<div slot="item-2">
						<div
							class="w-full h-full bg-primary-content text-primary flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					</div>
				</Diff>
			</div>
			<div class="text-center">Aspect 4/3</div>
			<div class="w-[350px]">
				<Diff aspect="4/3">
					<div slot="item-1">
						<div
							class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					</div>
					<div slot="item-2">
						<div
							class="w-full h-full bg-primary-content text-primary flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					</div>
				</Diff>
			</div>
			<div class="text-center">Aspect 1/1</div>
			<div class="w-[350px]">
				<Diff aspect="1/1">
					<div slot="item-1">
						<div
							class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					</div>
					<div slot="item-2">
						<div
							class="w-full h-full bg-primary-content text-primary flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					</div>
				</Diff>
			</div>
			<div class="text-center">Aspect Custom</div>
			<div class="w-[350px]">
				<Diff class="aspect-3/2">
					<div slot="item-1">
						<div
							class="w-full h-full bg-primary text-primary-content flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					</div>
					<div slot="item-2">
						<div
							class="w-full h-full bg-primary-content text-primary flex items-center justify-center text-2xl"
						>
							UI Kit
						</div>
					</div>
				</Diff>
			</div>
		</div>
	</div>
</SampleWrapper>
