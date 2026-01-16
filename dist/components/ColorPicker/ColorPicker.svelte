<script lang="ts">
	import type {
		ColorPicker,
		ButtonColor,
		ButtonShape,
		ButtonSize,
		ButtonVariant
	} from './ColorPicker.type.ts';
	// import './ColorPicker.css';
	import { ClassMerge } from '../../utils/ClassMerge.js';
	import { Button } from '../../index.js';
	let componentName = 'color-picker';
	type $$Props = ColorPicker;
	export let disabled: boolean = false;
	export let href: string = '';
	export let loading = false;
	export let wide = false;
	export let active = false;
	export let value = '';
	export let block = false;
	export let size: ButtonSize = undefined;
	export let variant: ButtonVariant = undefined;
	export let shape: ButtonShape = undefined;
	export let color: ButtonColor = undefined;
	export let label: string = '';
	let inputColor: any;
	$: componentClass = {
		wide,
		block,
		loading,
		active,
		outline: variant == 'outline',
		glass: variant == 'glass',
		link: variant == 'link',
		ghost: variant == 'ghost',
		square: shape == 'square',
		circle: shape == 'circle',
		xs: size == 'xs',
		sm: size == 'sm',
		md: size == 'md',
		lg: size == 'lg',
		disabled: disabled || loading,
		primary: color == 'primary',
		secondary: color == 'secondary',
		accent: color == 'accent',
		success: color == 'success',
		info: color == 'info',
		error: color == 'error',
		warning: color == 'warning',
		natural: color == 'natural'
	};
	function showColorOption() {
		if (disabled) {
			return;
		}
		inputColor.click();
	}
	$: wrapperClass = ClassMerge({ name: `${componentName}-wrapper`, staticClassess: $$props.class });
	$: labelClass = ClassMerge({ name: `${componentName}-label` });
</script>

<label class={wrapperClass}>
	<slot name="label">
		{#if label}
			<span class={labelClass}>
				{label}
			</span>
		{/if}
	</slot>
	<a class="relative" on:click={showColorOption}>
		<slot>
			<Button
				{...$$restProps}
				class="relative p-0 w-max"
				on:click={showColorOption}
				style="background-color: {value};"
				{disabled}
				{size}
				{color}
				{shape}
				{variant}
				{wide}
			>
				<svg
					id="SvgjsSvg1036"
					width="80%"
					height="auto"
					class="aspect-square"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xmlns:svgjs="http://svgjs.com/svgjs"
					><defs id="SvgjsDefs1037"></defs><g id="SvgjsG1038"
						><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
							><path
								fill="#00b76c"
								d="m23 23.6-9.1-9.1C9 19.4 6 26.2 6 33.7h12.8c0-4 1.6-7.5 4.2-10.1z"
								class="color00b76c svgShape"
							></path><path
								fill="#00a05b"
								d="M16.2 33.7h2.6c0-3.9 1.6-7.5 4.2-10l-1.2-1.2c-3.4 2.5-5.6 6.6-5.6 11.2z"
								class="color00a05b svgShape"
							></path><path
								fill="#546f7a"
								d="M18.8 33.7H6c0 7.5 3 14.2 7.9 19.1l9.1-9.1c-2.6-2.6-4.2-6.1-4.2-10z"
								class="color546f7a svgShape"
							></path><path
								fill="#475d63"
								d="M16.2 33.7c0 4.6 2.2 8.6 5.6 11.2l1.2-1.2c-2.6-2.6-4.2-6.1-4.2-10h-2.6z"
								class="color475d63 svgShape"
							></path><path
								fill="#3d4ff9"
								d="m23 43.7-9.1 9.1c4.9 4.9 11.6 7.9 19.1 7.9V47.8c-3.9 0-7.5-1.6-10-4.1z"
								class="color3d4ff9 svgShape"
							></path><path
								fill="#3046c1"
								d="M30.3 47.7h.7c-3.1-.4-5.9-1.9-8-4l-1.2 1.2c2.4 1.7 5.3 2.8 8.5 2.8z"
								class="color3046c1 svgShape"
							></path><path
								fill="#39a4fa"
								d="M33 47.8v12.8c7.5 0 14.2-3 19.1-7.9l-9.1-9c-2.5 2.5-6.1 4.1-10 4.1z"
								class="color39a4fa svgShape"
							></path><path
								fill="#0091e2"
								d="M33 60.5v.1c7.5 0 14.2-3 19.1-7.9l-1.4-1.4C46.3 56.4 40 59.8 33 60.5z"
								class="color0091e2 svgShape"
							></path><path
								fill="#8b41f7"
								d="M47.2 33.7c0 3.9-1.6 7.5-4.2 10l9.1 9.1C57 47.9 60 41.1 60 33.7H47.2z"
								class="color8b41f7 svgShape"
							></path><path
								fill="#7539d3"
								d="M57.3 33.7c0 6.8-2.5 12.9-6.6 17.7l1.4 1.4C57 47.9 60 41.1 60 33.7h-2.7z"
								class="color7539d3 svgShape"
							></path><path
								fill="#ff434d"
								d="M47.2 33.7H60c0-7.5-3-14.2-7.9-19.1l-9.1 9c2.6 2.6 4.2 6.1 4.2 10.1z"
								class="colorff434d svgShape"
							></path><path
								fill="#dd3646"
								d="M57.3 33.7H60c0-7.5-3-14.2-7.9-19.1L50.7 16c4.1 4.7 6.6 10.9 6.6 17.7z"
								class="colordd3646 svgShape"
							></path><path
								fill="#ff6137"
								d="m43 23.6 9.1-9.1C47.2 9.7 40.5 6.7 33 6.7v12.8c3.9 0 7.5 1.6 10 4.1z"
								class="colorff6137 svgShape"
							></path><path
								fill="#e04f32"
								d="m50.7 16 1.4-1.4C47.2 9.7 40.5 6.7 33 6.7v.1c7 .7 13.3 4.1 17.7 9.2z"
								class="colore04f32 svgShape"
							></path><path
								fill="#ffd039"
								d="M33 19.5V6.7c-7.5 0-14.2 3-19.1 7.9l9.1 9.1c2.5-2.6 6.1-4.2 10-4.2z"
								class="colorffd039 svgShape"
							></path><path
								fill="#ffae47"
								d="M30.3 19.6c-3.2 0-6.1 1.1-8.5 2.8l1.2 1.2c2.1-2.1 4.9-3.6 8-4h-.7z"
								class="colorffae47 svgShape"
							></path></svg
						></g
					></svg
				>
			</Button>
		</slot>
		<input
			type="color"
			bind:this={inputColor}
			bind:value
			class="invisible w-0 h-0 absolute top-1/2 right-1/2"
		/>
	</a>
</label>
