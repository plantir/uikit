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
	import SnippetTagCode from '../../ComponentCode/SnippetTagCode.svelte';
</script>

<SampleWrapper>
	<div slot="javascript">
		<TagCode name="script">
			import <span class="text-green-600">Stats</span> from '{$importDocumentSrc}/Stats.svelte';
			import <span class="text-green-600">Stat</span> from '{$importDocumentSrc}/Stat.svelte';
			import <span class="text-green-600">Button</span> from '{$importDocumentSrc}/Button.svelte';
		</TagCode>
		<br />
	</div>
	<div slot="html">
		<TagCode name="Stats" props={['class="shadow bg-base-100"']}>
			<TagCode name="Stat">
				<SnippetTagCode name="title">title</SnippetTagCode>
				<SnippetTagCode name="value">value</SnippetTagCode>
				<SnippetTagCode name="desc">desc</SnippetTagCode>
				<SnippetTagCode name="actions">
					<TagCode name="Button" props={['size="xs"']}>action 1</TagCode>
					<TagCode name="Button" props={['size="xs"']}>action 2</TagCode>
				</SnippetTagCode>
			</TagCode>
		</TagCode>
	</div>
	<div slot="preview" class="w-full">
		<div class="flex items-center justify-center">
			<Stats class="shadow bg-base-100">
				<Stat>
					{#snippet title()}
						<div>title</div>
					{/snippet}
					{#snippet value()}
						<div>value</div>
					{/snippet}
					{#snippet desc()}
						<div>desc</div>
					{/snippet}
					{#snippet actions()}
						<Button size="xs">action 1</Button>
						<Button size="xs">action 2</Button>
					{/snippet}
				</Stat>
			</Stats>
		</div>
	</div>
</SampleWrapper>
