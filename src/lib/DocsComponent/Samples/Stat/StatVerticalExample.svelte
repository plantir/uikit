<script lang="ts">
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '$lib/store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CountDown from '$lib/components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import Diff from '$lib/components/Diff/Diff.svelte';
	import Kbd from '$lib/components/Kbd/Kbd.svelte';
	import Stats from '$lib/components/Stat/Stats.svelte';
	import Stat from '$lib/components/Stat/Stat.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Stats</span> from '{$importDocumentSrc}/Stats.svelte';
			import <span class="text-green-600">Stat</span> from '{$importDocumentSrc}/Stat.svelte';
			import <span class="text-green-600">Avatar</span> from '{$importDocumentSrc}/Avatar.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Stats" props={['class="shadow bg-base-100"']}>
			<TagCode name="Stat">
				<TagCode name="div" props={['slot="figure"', 'class="text-primary"']}>
					<TagCode
						name="svg"
						props={[
							'xmlns="http://www.w3.org/2000/svg"',
							'fill="none"',
							'viewBox="0 0 24 24"',
							'class="inline-block h-8 w-8 stroke-current"'
						]}
					>
						<TagCode
							name="path"
							props={[
								'stroke-linecap="round"',
								'stroke-linejoin="round"',
								'stroke-width="2"',
								'd="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"'
							]}
						></TagCode>
					</TagCode>
				</TagCode>
				<TagCode name="div" props={['slot="title"']}>Total Likes</TagCode>
				<TagCode name="div" props={['slot="value"', 'class="text-primary"']}>25.6K</TagCode>
				<TagCode name="div" props={['slot="desc"']}>21% more than last month</TagCode>
			</TagCode>
			<TagCode name="Stat">
				<TagCode name="div" props={['slot="figure"', 'class="text-secondary"']}>
					<TagCode
						name="svg"
						props={[
							'xmlns="http://www.w3.org/2000/svg"',
							'fill="none"',
							'viewBox="0 0 24 24"',
							'class="inline-block h-8 w-8 stroke-current"'
						]}
					>
						<TagCode
							name="path"
							props={[
								'stroke-linecap="round"',
								'stroke-linejoin="round"',
								'stroke-width="2"',
								'd="M13 10V3L4 14h7v7l9-11h-7z"'
							]}
						></TagCode>
					</TagCode>
				</TagCode>
				<TagCode name="div" props={['slot="title"']}>Page Views</TagCode>
				<TagCode name="div" props={['slot="value"', 'class="text-secondary"']}>2.6M</TagCode>
				<TagCode name="div" props={['slot="desc"']}>21% more than last month</TagCode>
			</TagCode>
			<TagCode name="Stat">
				<TagCode name="div" props={['slot="title"']}>Tasks done</TagCode>
				<TagCode name="div" props={['slot="value"']}>86%</TagCode>
				<TagCode name="div" props={['slot="desc"', 'class="text-secondary"']}
					>31 tasks remaining</TagCode
				>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Stats class="shadow bg-base-100" vertical>
				<Stat>
					<div slot="figure" class="text-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block h-8 w-8 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
					</div>
					<div slot="title">Total Likes</div>
					<div slot="value" class="text-primary">25.6K</div>
					<div slot="desc">21% more than last month</div>
				</Stat>
				<Stat>
					<div slot="figure" class="text-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-8 h-8 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							>
							</path>
						</svg>
					</div>
					<div slot="title">Page Views</div>
					<div slot="value" class="text-secondary">2.6M</div>
					<div slot="desc">21% more than last month</div>
				</Stat>
				<Stat>
					<div slot="title">Tasks done</div>
					<div slot="value">86%</div>
					<div slot="desc" class="text-secondary">31 tasks remaining</div>
				</Stat>
			</Stats>
		</div>
	</div>
</SampleWrapper>
