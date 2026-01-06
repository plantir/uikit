<script lang="ts">
	import './CountDown.css';
	import El from '$lib/utils/El.svelte';
	import { ClassMerge } from '$lib/utils/ClassMerge.js';
	import moment from 'moment';
	import type {
		CountDown,
		CountDownValue,
		CountDownType,
		CountDownSize,
		CountDownColors
	} from './CountDown.type.js';
	import { onMount, onDestroy, type Snippet } from 'svelte';
	import { slide, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	let {
		value = $bindable(),
		type = 'colons',
		size = 'md',
		color,
		children,
		...others
	}: CountDown & {
		children?: Snippet;
	} = $props();
	let componentName = 'countdown';

	let componentClass = $derived({
		colons: type == 'colons',
		clock: type == 'clock',
		box: type == 'box',
		labels: type == 'labels',
		labels_under: type == 'labels-under',
		box_label: type == 'box-label',
		size,
		color
	});
	let diff = $state({
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	let interval: any = $state();
	onMount(() => {
		interval = setInterval(() => {
			diff.days = moment(value).diff(moment(), 'days');
			diff.hours = moment(value).add(-diff.days, 'days').diff(moment(), 'hours');
			diff.minutes = moment(value)
				.add(-diff.days, 'days')
				.add(-diff.hours, 'hours')
				.diff(moment(), 'minutes');
			diff.seconds = moment(value)
				.add(-diff.days, 'days')
				.add(-diff.hours, 'hours')
				.add(-diff.minutes, 'minutes')
				.diff(moment(), 'seconds');
		}, 1000);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<!-- <span transition:fade> -->
<El {componentName} {componentClass} {...others}>
	{#if diff.days}
		<div class="item">
			<div>
				{diff.days}
			</div>
			{#if type == 'clock'}
				<span class="countdown-label">d</span>
			{/if}
			{#if type.includes('label')}
				<div class="countdown-label">days</div>
			{/if}
		</div>
	{/if}
	<div class="item">
		<div class="countdown-number-wrapper">
			{#key diff.hours}
				<span
					class="countdown-number"
					out:fly={{ y: 32, duration: 250, easing: cubicOut }}
					in:fly={{ y: -32, duration: 250, easing: cubicOut }}
					>{diff.hours < 10 ? '0' : ''}{diff.hours}</span
				>
			{/key}
		</div>
		{#if type == 'clock'}
			<span class="countdown-label">h</span>
		{/if}
		{#if type.includes('label')}
			<div class="countdown-label">hours</div>
		{/if}
	</div>
	<div class="item">
		<div class="countdown-number-wrapper">
			{#key diff.minutes}
				<span
					class="countdown-number"
					out:fly={{ y: 32, duration: 500, easing: cubicOut }}
					in:fly={{ y: -32, duration: 500, easing: cubicOut }}
					>{diff.minutes < 10 ? '0' : ''}{diff.minutes}</span
				>
			{/key}
		</div>
		{#if type == 'clock'}
			<span class="countdown-label">m</span>
		{/if}
		{#if type.includes('label')}
			<div class="countdown-label">min</div>
		{/if}
	</div>
	<div class="item">
		<div class="countdown-number-wrapper">
			{#key diff.seconds}
				<span
					class="countdown-number"
					out:fly={{ y: 32, duration: 250, easing: cubicOut }}
					in:fly={{ y: -32, duration: 250, easing: cubicOut }}
					>{diff.seconds < 10 ? '0' : ''}{diff.seconds}</span
				>
			{/key}
		</div>
		{#if type == 'clock'}
			<span class="countdown-label">s</span>
		{/if}
		{#if type.includes('label')}
			<div class="countdown-label">sec</div>
		{/if}
	</div>
</El>
<!-- </span> -->
