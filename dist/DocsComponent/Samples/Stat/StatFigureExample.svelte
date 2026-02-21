<script lang="ts">
	import TagCode from '../../ComponentCode/TagCode.svelte';
	import { importDocumentSrc } from '../../../store/index.js';
	import SampleWrapper from '../SampleWrapper.svelte';
	import CountDown from '../../../components/CountDown/CountDown.svelte';
	import moment from 'moment';
	import Diff from '../../../components/Diff/Diff.svelte';
	import Kbd from '../../../components/Kbd/Kbd.svelte';
	import Stats from '../../../components/Stat/Stats.svelte';
	import Stat from '../../../components/Stat/Stat.svelte';
	import Button from '../../../components/Button/Button.svelte';
	import Avatar from '../../../components/Avatar/Avatar.svelte';
	import SnippetTagCode from '../../ComponentCode/SnippetTagCode.svelte';
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
				<SnippetTagCode name="figure">
					<TagCode
						name="svg"
						props={[
							'xmlns="http://www.w3.org/2000/svg"',
							'fill="none"',
							'viewBox="0 0 24 24"',
							'class="inline-block h-8 w-8 stroke-primary"'
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
				</SnippetTagCode>
				<SnippetTagCode name="title">Total Likes</SnippetTagCode>
				<SnippetTagCode name="value">25.6K</SnippetTagCode>
				<SnippetTagCode name="desc">21% more than last month</SnippetTagCode>
			</TagCode>
			<TagCode name="Stat">
				<SnippetTagCode name="figure">
					<TagCode name="div" props={['class="text-secondary"']}>
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
				</SnippetTagCode>

				<SnippetTagCode name="title">Page Views</SnippetTagCode>
				<SnippetTagCode name="value">2.6M</SnippetTagCode>
				<SnippetTagCode name="desc">21% more than last month</SnippetTagCode>
			</TagCode>
			<TagCode name="Stat">
				<SnippetTagCode name="figure">
					<TagCode name="Avatar" props={['online', 'shape="circle"']}>
						<TagCode name="img" close_self props={['src="your image url"']} />
					</TagCode>
				</SnippetTagCode>
				<SnippetTagCode name="title">Tasks done</SnippetTagCode>
				<SnippetTagCode name="value">86%</SnippetTagCode>
				<SnippetTagCode name="desc">31 tasks remaining</SnippetTagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Stats class="shadow bg-base-100">
				<Stat>
					{#snippet figure()}
						<div class="text-primary">
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
					{/snippet}
					{#snippet title()}
						<div>Total Likes</div>
					{/snippet}
					{#snippet value()}
						<div class="text-primary">25.6K</div>
					{/snippet}
					{#snippet desc()}
						<div>21% more than last month</div>
					{/snippet}
				</Stat>
				<Stat>
					{#snippet figure()}
						<div class="text-secondary">
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
					{/snippet}
					{#snippet title()}
						<div>Page Views</div>
					{/snippet}
					{#snippet value()}
						<div class="text-secondary">2.6M</div>
					{/snippet}
					{#snippet desc()}
						<div>21% more than last month</div>
					{/snippet}
				</Stat>
				<Stat>
					{#snippet figure()}
						<div>
							<Avatar online shape="circle">
								<img src="/profile-02.webp" alt="" />
							</Avatar>
						</div>
					{/snippet}
					{#snippet title()}
						<div>Tasks done</div>
					{/snippet}
					{#snippet value()}
						<div>86%</div>
					{/snippet}
					{#snippet desc()}
						<div class="text-secondary">31 tasks remaining</div>
					{/snippet}
				</Stat>
			</Stats>
		</div>
	</div>
</SampleWrapper>
