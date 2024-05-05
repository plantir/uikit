<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import TabItem from '$lib/components/Tabs/TabItem.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Switch from '$lib/components/Switch/Switch.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import TextField from '$lib/components/TextField/TextField.svelte';
	import Checkbox from '$lib/components/Checkbox/Checkbox.svelte';
	import RadioGroup from '$lib/components/RadioGroup/RadioGroup.svelte';
	import Radio from '$lib/components/Radio/Radio.svelte';
	let isClipboardButtonPressed = false;
	const copyText = (text: any) => {
		navigator.clipboard.writeText(text);
		isClipboardButtonPressed = true;
		setTimeout(() => {
			isClipboardButtonPressed = false;
		}, 2000);
	};

	let activeMenuItemOnHeroMockup = 1;
	let toggleValueForCodeCompare = false;

	let scrollY: any;
	let innerHeight: any;
	function scaleValue(value: any, from: any, to: any) {
		let scale = (to[1] - to[0]) / (from[1] - from[0]);
		let capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
		return capped * scale + to[0];
	}
	$: scrollY = scrollY;
	$: animateValue = function (targetElement: any, scrollPercentage: any, animateRange: any) {
		if (targetElement) {
			return scaleValue(
				(((scrollY || 0) - targetElement.offsetTop) / targetElement.clientHeight) * 100,
				scrollPercentage,
				animateRange
			);
		}
		return 0;
	};
	let section: any = [];
	let demo_1_ClassNames = [
		'bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95',
		'btn btn-primary'
	];
	$: demo_1_ClassNameHandler = () => {
		if (
			section['hero'] &&
			(scrollY / (section['hero'].offsetTop + section['hero'].clientHeight)) * 100 > 25 &&
			(scrollY / (section['hero'].offsetTop + section['hero'].clientHeight)) * 100 < 65
		) {
			return demo_1_ClassNames[0].slice(
				0,
				Math.trunc(animateValue(section['hero'], [25, 65], [0, demo_1_ClassNames[0].length]))
			);
		} else if (
			section['hero'] &&
			(scrollY / (section['hero'].offsetTop + section['hero'].clientHeight)) * 100 > 65 &&
			(scrollY / (section['hero'].offsetTop + section['hero'].clientHeight)) * 100 < 80
		) {
			return demo_1_ClassNames[0].slice(
				0,
				Math.trunc(animateValue(section['hero'], [75, 80], [demo_1_ClassNames[0].length, 0]))
			);
		} else if (
			section['hero'] &&
			(scrollY / (section['hero'].offsetTop + section['hero'].clientHeight)) * 100 > 80
		) {
			return demo_1_ClassNames[1].slice(
				0,
				Math.trunc(animateValue(section['hero'], [80, 82], [0, demo_1_ClassNames[1].length]))
			);
		}
		return '';
	};
	$: demo_1_StyleHandler = () => {
		if (
			section['hero'] &&
			(scrollY / (section['hero'].offsetTop + section['hero'].clientHeight)) * 100 > 80
		) {
			return 'text-teal-700';
		}
		return 'text-rose-600';
	};
	$: demo_1_ElementTextHandler = () => {
		if (
			section['hero'] &&
			(scrollY / (section['hero'].offsetTop + section['hero'].clientHeight)) * 100 > 80
		) {
			return 'Uikit Button';
		}
		return 'Tailwind Button';
	};
</script>

<svelte:window bind:scrollY bind:innerHeight />
<div>
	<div
		class="flex min-h-[550vh] max-w-[100vw] flex-col items-center justify-start xl:flex-row xl:items-start xl:justify-between"
		bind:this={section['hero']}
	>
		<div class="shrink xl:w-1/2">
			<div
				class="flex min-h-[calc(100vh-4rem)] items-center justify-center px-2 py-10 text-center xl:justify-start xl:pe-0 xl:ps-10 xl:text-start"
				class:invisible={section['hero'] && scrollY > section['hero'].clientHeight}
			>
				<div>
					<h1
						class="font-title text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] [word-break:auto-phrase] xl:w-[115%] xl:text-start [:root[dir=rtl]_&]:leading-[1.35]"
					>
						<span
							class="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20"
						>
							The most popular
						</span>
						<br />
						<span class="inline-grid">
							<span
								class="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
								aria-hidden="true"
								data-text={'component library'}
							>
							</span>
							<span
								class="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
							>
								component library
							</span>
						</span>
						<br />
						<span
							class="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20"
						>
							for Tailwind CSS
						</span>
					</h1>
					<div class="h-4" />
					<p class="text-base-content/70 font-title py-4 font-light md:text-lg xl:text-2xl">
						{@html "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>"}
					</p>
					<div class="h-10" />
					<div>
						<div
							class="inline-flex w-full flex-col items-stretch justify-center gap-2 px-4 md:flex-row xl:justify-start xl:px-0"
						>
							<Button href="/docs/components/button" size="lg" class="rounded-full flex-1"
								>See Components</Button
							>
							<Button size="lg" class="group rounded-full flex-1" color="natural">
								How to use?
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
									/>
								</svg>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div class="xl:h-[calc(20vh)]" />
			<div>
				<div class="max-w-[100vw] px-2 py-10 lg:px-10 xl:max-w-[50vw]">
					<div class="font-title text-center xl:text-start">
						<h2 class="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none">
							{@html "don't re-invent <br/>the wheel <br/>every time"}
							<img
								loading="lazy"
								width="72"
								height="72"
								alt="yawing face emoji"
								src="/yawning-face@80.webp"
								srcset={`/yawning-face.webp 2x`}
								class="pointer-events-none inline-block h-[1em] w-[1em] align-bottom"
							/>
						</h2>

						<p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
							{@html 'In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.'}
						</p>
						<div class="h-40" />
						<div class="relative h-[300vh]">
							<div class="sticky top-[16vh] xl:top-[30vh]">
								<h2 class="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none">
									{@html "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>"}
								</h2>
								<div class="h-6" />
								<p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
									{@html 'For every element, every page, every project,<br/>again and again'}…
								</p>
								<div class="h-24" />
							</div>
						</div>
						<div class="relative h-screen">
							<div class="sticky top-[16vh] xl:top-[30vh]">
								<h2 class="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none">
									{@html "use <span class='text-success'><span class='font-black'>semantic</span> <br />class names</span>"}
									<img
										loading="lazy"
										width="72"
										height="72"
										alt="sunglasses emoji"
										src="/smiling-face-with-sunglasses@80.webp"
										srcset={`/smiling-face-with-sunglasses.webp 2x`}
										class="pointer-events-none inline-block h-[1em] w-[1em] align-bottom"
									/>
								</h2>
								<div class="h-6" />
								<p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
									It's descriptive, faster, cleaner and easier to maintain.
								</p>
								<div class="h-20" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="invisible sticky bottom-4 flex w-[calc(100%-2rem)] shrink duration-700 xl:visible xl:-end-32 xl:bottom-auto xl:top-16 xl:w-auto xl:!transform-none xl:overflow-x-hidden xl:overflow-y-clip xl:bg-transparent xl:pb-16 xl:pt-16"
			style={`${
				section['hero'] && scrollY > section['hero'].clientHeight * 0.2
					? 'visibility: visible;'
					: ''
			}transform:translateY(${animateValue(section['hero'], [17, 25], [120, 0])}%)`}
		>
			<div
				class="mockup mockup-window bg-base-200/90 xl:bg-base-200 mx-auto origin-top overflow-visible pb-4 backdrop-blur will-change-auto [--rtl-reverse:1] [transform:rotateX(20deg)rotateZ(-20deg)skewY(8deg)scale(1)] rtl:[--rtl-reverse:-1] rtl:[transform:rotateX(20deg)rotateZ(20deg)skewY(-8deg)scale(1)] max-[1279px]:![transform:translate3d(0,0,0)] xl:-end-20 xl:-me-10 xl:h-[32rem] xl:w-[50rem] xl:rounded-e-none xl:pe-4 xl:shadow-[-0.05rem_0.1rem_0rem_#00000014] xl:backdrop-blur-0"
				style={section['hero'] &&
					`transform: rotateX(${animateValue(
						section['hero'],
						[7, 17],
						[20, 0]
					)}deg)rotateZ(calc(${animateValue(
						section['hero'],
						[7, 17],
						[-20, 0]
					)}deg * var(--rtl-reverse)))skewY(calc(${animateValue(
						section['hero'],
						[7, 17],
						[8, 0]
					)}deg * var(--rtl-reverse)))`}
				class:invisible={section['hero'] && scrollY > section['hero'].clientHeight}
			>
				<div class="grid">
					<div
						style={`opacity:${animateValue(section['hero'], [15, 17], [1, 0])}`}
						class="z-[1] col-start-1 row-start-1 grid overflow-y-hidden overflow-x-scroll [scrollbar-width:none] xl:visible xl:overflow-x-visible xl:overflow-y-visible [&::-webkit-scrollbar]:hidden"
						class:invisible={section['hero'] && scrollY < section['hero'].clientHeight}
					>
						<!-- flying components -->
						<div
							class="col-start-1 row-start-1 mx-6 flex items-end gap-6 xl:mx-0 xl:items-start xl:gap-0"
						>
							<div class="flex gap-6 xl:w-60 xl:flex-col xl:gap-0">
								<div
									class="relative z-[1] w-80 will-change-auto motion-reduce:!transform-none max-[1279px]:![transform:translate3d(0,0,0)] xl:-start-6 xl:w-auto xl:[filter:drop-shadow(-1rem_3rem_1rem_#00000012)]"
									style={`filter: drop-shadow(calc(-1rem * var(--rtl-reverse)) 3rem 1rem #00000012);transform:translate(calc(${animateValue(
										section['hero'],
										[8, 15],
										[0, 250]
									)}px * var(--rtl-reverse)),${animateValue(section['hero'], [2, 9], [0, -800])}px)`}
								>
									<Tabs variant="lift" selected="Features">
										<TabItem value="Features" title="Features">
											<div class="bg-base-100 rounded-b-box h-60 shrink-0 rounded-se-box w-64">
												<div class="flex flex-col items-stretch p-6 gap-2">
													<div class="form-control">
														<Switch color="primary" size="sm">
															<span slot="label" class="label-text text-xs">Faster development</span
															>
														</Switch>
													</div>
													<div class="form-control">
														<Switch color="secondary" size="sm">
															<span slot="label" class="label-text text-xs">Cleaner HTML</span>
														</Switch>
													</div>
													<div class="form-control">
														<Switch color="accent" size="sm">
															<span slot="label" class="label-text text-xs">Customizable</span>
														</Switch>
													</div>
													<div class="form-control">
														<Switch color="success" size="sm">
															<span slot="label" class="label-text text-xs">Themeable</span>
														</Switch>
													</div>
													<div class="form-control">
														<Switch value={true} size="sm">
															<span slot="label" class="label-text text-xs">Pure CSS</span>
														</Switch>
													</div>
												</div>
											</div>
										</TabItem>
										<TabItem value="Links" title="Links">
											<div
												class="bg-base-100 rounded-b-box h-60 shrink-0 p-2 w-64 rounded-se-box rounded-ss-box"
											>
												<div class="menu-title">Dashboard</div>
												<div class="flex flex-col gap-1">
													<Button size="sm" class="justify-start" variant="ghost">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															class="h-5 w-5"
														>
															<path
																d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"
															/>
														</svg>
														Dashboard
													</Button>
													<Button size="sm" class="justify-start" variant="ghost">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															class="h-5 w-5"
														>
															<path
																d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
															/>
														</svg>
														Notifications
													</Button>
													<Button size="sm" class="justify-start" variant="ghost">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															class="h-5 w-5"
														>
															<path
																fill-rule="evenodd"
																d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"
																clip-rule="evenodd"
															/>
														</svg>
														Messages
													</Button>
													<Button size="sm" class="justify-start" variant="ghost">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															class="h-5 w-5"
														>
															<path
																d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"
															/>
														</svg>
														People
													</Button>
													<Button size="sm" class="justify-start" variant="ghost">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															class="h-5 w-5"
														>
															<path
																fill-rule="evenodd"
																d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
																clip-rule="evenodd"
															/>
														</svg>
														Products
													</Button>
												</div>
											</div>
										</TabItem>
										<TabItem value="Message" title="Message">
											<div class="bg-base-100 rounded-b-box h-60 shrink-0 p-2 w-64 rounded-ss-box">
												<div class="flex h-full flex-col px-4 py-4">
													<div class="grow">
														<div class="chat chat-start">
															<div class="chat-image avatar">
																<Avatar shape="circle" size="xs">
																	<img
																		loading="lazy"
																		src="/tailwind-css-component-profile-1@94w.jpg"
																		alt="tailwind css avatar component"
																	/>
																</Avatar>
															</div>
															<div
																class="chat-bubble text-xs [.chat_&]:before:[inset-inline-start:-0.73rem]"
															>
																Use Tailwind CSS but write fewer class names.
															</div>
														</div>
													</div>
													<div class="daisy-join w-full">
														<TextField
															placeholder="Message"
															size="sm"
															class="daisy-join-item"
															inputClass="daisy-join-item"
														></TextField>
														<Button class="daisy-join-item" size="sm" color="natural">
															<svg
																fill="currentColor"
																class="h-4 w-4"
																viewBox="0 0 24 24"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"
																/>
															</svg>
														</Button>
													</div>
												</div>
											</div>
										</TabItem>
									</Tabs>
								</div>

								<div
									class="flex w-60 flex-col justify-end gap-4 xl:w-auto xl:justify-normal xl:p-6"
								>
									<div
										class="flex gap-3 items-center p-4 rounded-btn border-base-300 border will-change-auto motion-reduce:!transform-none motion-reduce:!shadow-none max-[1279px]:![transform:translate3d(0,0,0)]"
										style={`box-shadow:calc(${animateValue(
											section['hero'],
											[5, 5.5],
											[0, -1]
										)}rem * var(--rtl-reverse)) ${animateValue(
											section['hero'],
											[5, 5.5],
											[0, 3]
										)}rem ${animateValue(
											section['hero'],
											[5, 5.5],
											[0, 1]
										)}rem #00000012;transform:translate(calc(${animateValue(
											section['hero'],
											[5, 15],
											[0, 250]
										)}px * var(--rtl-reverse)),${animateValue(
											section['hero'],
											[5, 15],
											[0, -800]
										)}px)`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											class="h-5 w-5 shrink-0"
										>
											<path
												fill-rule="evenodd"
												d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clip-rule="evenodd"
											/>
										</svg>
										<span class="text-xs">
											{@html 'Pure CSS. <br />No JS dependency'}
										</span>
									</div>
									<div
										class="flex gap-3 items-center p-4 rounded-btn border-base-300 border will-change-auto motion-reduce:!transform-none motion-reduce:!shadow-none max-[1279px]:![transform:translate3d(0,0,0)]"
										style={`box-shadow:calc(${animateValue(
											section['hero'],
											[6, 6.5],
											[0, -1]
										)}rem * var(--rtl-reverse)) ${animateValue(
											section['hero'],
											[6, 6.5],
											[0, 3]
										)}rem ${animateValue(
											section['hero'],
											[6, 6.5],
											[0, 1]
										)}rem #00000012;transform:translate(calc(${animateValue(
											section['hero'],
											[6, 16],
											[0, 250]
										)}px * var(--rtl-reverse)),${animateValue(
											section['hero'],
											[6, 16],
											[0, -800]
										)}px)`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											class="h-5 w-5 shrink-0"
										>
											<path
												d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"
											/>
										</svg>
										<span class="text-xs"> Works on all frameworks </span>
									</div>
								</div>
							</div>

							<div class="flex shrink-0 gap-6 pe-4 xl:flex-col xl:pe-0">
								<div
									class="flex flex-col rounded-2xl bg-base-100 shadow-sm will-change-auto motion-reduce:!transform-none motion-reduce:!shadow-sm max-[1279px]:![transform:translate3d(0,0,0)]"
									style={`--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05), calc(${animateValue(
										section['hero'],
										[0, 0.5],
										[0, -1]
									)}rem * var(--rtl-reverse)) ${animateValue(
										section['hero'],
										[0, 0.5],
										[0, 3]
									)}rem ${animateValue(
										section['hero'],
										[0, 0.5],
										[0, 1]
									)}rem #00000012;transform:translate(calc(${animateValue(
										section['hero'],
										[0, 8],
										[0, 250]
									)}px * var(--rtl-reverse)),${animateValue(section['hero'], [0, 8], [0, -800])}px)`}
								>
									<div class="p-8">
										<h2 class="font-semibold mb-4 text-sm">Design system</h2>
										<div class="grid grid-cols-4 items-end gap-4 mb-4">
											<div
												class="flex flex-col items-center text-[.6rem] text-base-content/70 gap-1"
											>
												<Checkbox size="xs"></Checkbox>
												checkbox-xs
											</div>
											<div
												class="flex flex-col items-center text-[.6rem] text-base-content/70 gap-1"
											>
												<Checkbox size="sm"></Checkbox>
												checkbox-sm
											</div>
											<div
												class="flex flex-col items-center text-[.6rem] text-base-content/70 gap-1"
											>
												<Checkbox size="md"></Checkbox>
												checkbox-md
											</div>
											<div
												class="flex flex-col items-center text-[.6rem] text-base-content/70 gap-1"
											>
												<Checkbox size="lg"></Checkbox>
												checkbox-lg
											</div>
										</div>
										<RadioGroup class="!grid grid-cols-4 items-end gap-4 w-full">
											<div class="flex flex-col items-center gap-1">
												<Radio size="xs"></Radio>
												<span class="text-base-content/70 text-[.6rem]">radio-xs</span>
											</div>
											<div class="flex flex-col items-center gap-1">
												<Radio size="sm"></Radio>
												<span class="text-base-content/70 text-[.6rem]">radio-sm</span>
											</div>
											<div class="flex flex-col items-center gap-1">
												<Radio size="md"></Radio>
												<span class="text-base-content/70 text-[.6rem]">radio-md</span>
											</div>
											<div class="flex flex-col items-center gap-1">
												<Radio size="lg"></Radio>
												<span class="text-base-content/70 text-[.6rem]">radio-lg</span>
											</div>
										</RadioGroup>
									</div>
								</div>
								<div
									class="flex flex-col rounded-2xl bg-base-100 shadow-sm will-change-auto motion-reduce:!transform-none motion-reduce:!shadow-sm max-[1279px]:![transform:translate3d(0,0,0)]"
									style={`--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05), calc(${animateValue(
										section['hero'],
										[4, 4.5],
										[0, -1]
									)}rem * var(--rtl-reverse)) ${animateValue(
										section['hero'],
										[4, 4.5],
										[0, 3]
									)}rem ${animateValue(
										section['hero'],
										[4, 4.5],
										[0, 1]
									)}rem #00000012;transform:translate(calc(${animateValue(
										section['hero'],
										[4, 10],
										[0, 250]
									)}px * var(--rtl-reverse)),${animateValue(section['hero'], [4, 10], [0, -800])}px)`}
								>
									<div class="p-8">
										<h2 class="font-semibold mb-4 text-sm">Semantic colors</h2>
										<div class="grid grid-cols-4 gap-4">
											<div class="flex flex-col items-center gap-1">
												<div class="bg-primary rounded-btn aspect-square w-10" />
												<div class="text-base-content/70 text-[.6rem]">primary</div>
											</div>
											<div class="flex flex-col items-center gap-1">
												<div class="bg-secondary rounded-btn aspect-square w-10" />
												<div class="text-base-content/70 text-[.6rem]">secondary</div>
											</div>
											<div class="flex flex-col items-center gap-1">
												<div class="bg-accent rounded-btn aspect-square w-10" />
												<div class="text-base-content/70 text-[.6rem]">accent</div>
											</div>
											<div class="flex flex-col items-center gap-1">
												<div class="bg-neutral rounded-btn aspect-square w-10" />
												<div class="text-base-content/70 text-[.6rem]">neutral</div>
											</div>
											<div class="flex flex-col items-center gap-1">
												<div class="bg-info rounded-btn aspect-square w-10" />
												<div class="text-base-content/70 text-[.6rem]">info</div>
											</div>
											<div class="flex flex-col items-center gap-1">
												<div class="bg-success rounded-btn aspect-square w-10" />
												<div class="text-base-content/70 text-[.6rem]">success</div>
											</div>
											<div class="flex flex-col items-center gap-1">
												<div class="bg-warning rounded-btn aspect-square w-10" />
												<div class="text-base-content/70 text-[.6rem]">warning</div>
											</div>
											<div class="flex flex-col items-center gap-1">
												<div class="bg-error rounded-btn aspect-square w-10" />
												<div class="text-base-content/70 text-[.6rem]">error</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						dir="ltr"
						class="col-start-1 row-start-1 w-11/12 pb-3 pe-10 ps-10 opacity-0 rtl:ps-0 sm:pb-10 lg:pe-4 rtl:lg:ps-20 xl:ps-20 xl:pt-10"
						style={`opacity:${animateValue(
							section['hero'],
							[16, 17],
							[0, 1]
						)};z-index:${animateValue(section['hero'], [20, 22], [0, 1])}`}
					>
						<pre class="max-w-lg text-xs sm:text-base">
						<code class="whitespace-pre-line">
<span class="text-base-content/40 italic">// Styling a simple button</span>
{#if demo_1_ElementTextHandler() == 'Uikit Button'}
									&lt;Button color="primary" &gt;
	{demo_1_ElementTextHandler()}
	&lt;/Button&gt;{:else}&lt;button class=&quot;<span
										class={`${demo_1_StyleHandler()}`}>{demo_1_ClassNameHandler()}</span
									>&quot;&gt;
	{demo_1_ElementTextHandler()}
	&lt;/button&gt;{/if}
		</code>
					</pre>
						<div>
							<div class="text-base-content/40 py-6 font-mono text-xs italic sm:text-base">
								// Result:
							</div>
							{#if demo_1_ElementTextHandler() == 'Uikit Button'}
								<Button color="primary">{demo_1_ElementTextHandler()}</Button>
							{:else}
								<button class={`${demo_1_ClassNameHandler()}`}>{demo_1_ElementTextHandler()}</button
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full px-2 py-40 lg:px-10" bind:this={section['nextlevel']}>
		<div class="text-center">
			<h2
				class="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none will-change-auto [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1279px]:!tracking-normal"
				style={`letter-spacing:${animateValue(section['nextlevel'], [-100, 20], [1, 0])}rem`}
			>
				Take Tailwind CSS
				<br />
				<span
					class="bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1279px]:!tracking-normal [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
					style={`letter-spacing:${animateValue(section['nextlevel'], [-100, 20], [0, 1])}rem`}
				>
					to the next level
				</span>
			</h2>
			<p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
				{@html 'daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like'}
				<a target="_blank" href="/docs/component/button/" class="text-primary">btn</a>
				,
				<a target="_blank" href="/docs/component/tabs/" class="text-primary">tabs</a>
				,
				<a target="_blank" href="/docs/component/switch/" class="text-primary">switch</a>
				and many more.
			</p>
			<div class="h-6" />
			<p class="text-success font-title font-light md:text-2xl">
				{@html 'This allows us to focus on important things<br />instead of styling basic elements for every project.'}
			</p>
			<div class="h-12" />
			<div class="flex w-full justify-center">
				<Button href="/docs/component/button" color="primary">all-components-btn</Button>
			</div>
		</div>
	</div>
	<div bind:this={section['uglyhtml']}>
		<div>
			<div class="relative overflow-hidden">
				<div class="w-full px-2 py-40 lg:px-10">
					<div class="text-center">
						<h2
							class="font-title relative z-[2] mx-auto text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none"
						>
							<span
								class="motion-reduce:!opacity-100"
								style={`opacity:${
									section['uglyhtml'] &&
									((scrollY - section['uglyhtml'].offsetTop) / section['uglyhtml'].clientHeight) *
										100 >
										-100 &&
									((scrollY - section['uglyhtml'].offsetTop) / section['uglyhtml'].clientHeight) *
										100 <
										-30
										? 0.1
										: 1
								}`}
							>
								No
							</span>
							<span
								class="motion-reduce:!opacity-100"
								style={`opacity:${
									section['uglyhtml'] &&
									((scrollY - section['uglyhtml'].offsetTop) / section['uglyhtml'].clientHeight) *
										100 >
										-100 &&
									((scrollY - section['uglyhtml'].offsetTop) / section['uglyhtml'].clientHeight) *
										100 <
										-25
										? 0.1
										: 1
								}`}
							>
								more
							</span>
							<span
								class="motion-reduce:!opacity-100"
								style={`opacity:${
									section['uglyhtml'] &&
									((scrollY - section['uglyhtml'].offsetTop) / section['uglyhtml'].clientHeight) *
										100 >
										-100 &&
									((scrollY - section['uglyhtml'].offsetTop) / section['uglyhtml'].clientHeight) *
										100 <
										-20
										? 0.1
										: 1
								}`}
							>
								ugly
							</span>
							<span
								class="motion-reduce:!opacity-100"
								style={`opacity:${
									section['uglyhtml'] &&
									((scrollY - section['uglyhtml'].offsetTop) / section['uglyhtml'].clientHeight) *
										100 >
										-100 &&
									((scrollY - section['uglyhtml'].offsetTop) / section['uglyhtml'].clientHeight) *
										100 <
										-15
										? 0.1
										: 1
								}`}
							>
								HTML
							</span>
						</h2>
						<p class="text-base-content/70 font-title relative z-[2] py-4 font-light md:text-3xl">
							{@html 'Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.'}
						</p>
						<div class="h-4" />
						<div class="mx-auto w-72 text-start">
							<span class="text-base-content/70 inline-block -translate-y-2 -rotate-12">
								Click
							</span>
							<svg
								class="text-base-content/20 inline-block h-8 w-20 rtl:[transform:rotateY(180deg)]"
								viewBox="0 0 45 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1.50244C23.4 -1.69756 38.3333 11.1691 43 18.0024M43 18.0024L38 17.0024M43 18.0024V13.0024"
									stroke="currentColor"
								/>
							</svg>
						</div>
						<div class="flex justify-center pb-10 pt-4">
							<div class="flex items-center gap-3">
								Tailwind only
								<Switch bind:value={toggleValueForCodeCompare} size="lg" color="primary" />
								Tailwind + daisyUI
							</div>
						</div>
					</div>
					<div class="flex flex-col items-center gap-6 xl:flex-row">
						{#if toggleValueForCodeCompare}
							<div
								class="mockup-code border-base-content/10 text-base-content relative max-w-[calc(100vw-2rem)] grow border bg-transparent text-xs xl:h-[550px]"
							>
								<pre class="w-full whitespace-pre-wrap px-6 before:hidden"><code
									/>&lt;div class=&quot;<span class="text-teal-700">card bg-base-200 w-80</span
									>&quot;&gt;
		&lt;div class=&quot;<span class="text-teal-700">card-body</span>&quot;&gt;
		  &lt;Textfield placeholder=&quot;Email&quot;  /&gt;
		  &lt;Switch label=&quot;Accept terms of use&quot;  /&gt;
		  &lt;Switch label=&quot;Submit to newsletter&quot;  /&gt;
		  &lt;Button color="natural" &gt;{'Save'}&lt;/Button&gt;
		&lt;/div&gt;
	  &lt;/div&gt;</pre>
							</div>
							<div class="divider xl:divider-horizontal">
								<span class="hidden rtl:rotate-180 xl:inline">→</span>
								<span class="xl:hidden">↓</span>
							</div>
							<div>
								<div class="card bg-base-200 w-80">
									<div class="card-body">
										<TextField placeholder="Email" />
										<Switch label="Accept terms of use"></Switch>
										<Switch label="Submit to newsletter"></Switch>
										<Button color="natural">Save</Button>
									</div>
								</div>
							</div>
						{:else}
							<div
								class="mockup-code border-base-content/10 text-base-content relative max-w-[calc(100vw-2rem)] grow border bg-transparent text-xs xl:h-[550px]"
							>
								<pre class="w-full whitespace-pre-wrap px-6 before:hidden"><code
									/>&lt;div class=&quot;<span class="text-rose-600"
										>w-80 rounded-2xl bg-gray-100</span
									>&quot;&gt;
		&lt;div class=&quot;<span class="text-rose-600">flex flex-col gap-2 p-8</span>&quot;&gt;
		  &lt;input placeholder=&quot;Email&quot; class=&quot;<span class="text-rose-600"
										>w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100</span
									>&quot; /&gt;
		  &lt;label class=&quot;<span class="text-rose-600"
										>flex cursor-pointer items-center justify-between p-1</span
									>&quot;&gt;
			Accept terms of use
			&lt;div class=&quot;<span class="text-rose-600">relative inline-block</span>&quot;&gt;
			  &lt;input type=&quot;checkbox&quot; class=&quot;<span class="text-rose-600"
										>peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2</span
									>&quot; /&gt;
			  &lt;span class=&quot;<span class="text-rose-600"
										>pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900</span
									>&quot;&gt;&lt;/span&gt;
			&lt;/div&gt;
		  &lt;/label&gt;
		  &lt;label class=&quot;<span class="text-rose-600"
										>flex cursor-pointer items-center justify-between p-1</span
									>&quot;&gt;
			Submit to newsletter
			&lt;div class=&quot;<span class="text-rose-600">relative inline-block</span>&quot;&gt;
			  &lt;input type=&quot;checkbox&quot; class=&quot;<span class="text-rose-600"
										>peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2</span
									>&quot; /&gt;
			  &lt;span class=&quot;<span class="text-rose-600"
										>pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900</span
									>&quot;&gt;&lt;/span&gt;
			&lt;/div&gt;
		  &lt;/label&gt;
		  &lt;button class=&quot;<span class="text-rose-600"
										>inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95</span
									>&quot;&gt;Save&lt;/button&gt;
		&lt;/div&gt;
	  &lt;/div&gt;</pre>
							</div>
							<div class="divider xl:divider-horizontal">
								<span class="hidden rtl:rotate-180 xl:inline">→</span>
								<span class="xl:hidden">↓</span>
							</div>
							<div>
								<div class="w-80 rounded-2xl bg-gray-100 text-black">
									<div class="flex flex-col gap-2 p-8">
										<input
											name="sample-email"
											placeholder="Email"
											class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100"
										/>
										<label class="flex cursor-pointer items-center justify-between p-1">
											Accept terms of use
											<div class="relative inline-block">
												<input
													name="sample-checkbox"
													type="checkbox"
													class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
												/>
												<span
													class="pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900"
												/>
											</div>
										</label>
										<label class="flex cursor-pointer items-center justify-between p-1">
											Submit to newsletter
											<span class="relative inline-block">
												<input
													type="checkbox"
													name="sample-checkbox"
													class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
												/>
												<span
													class="pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900"
												/>
											</span>
										</label>
										<button
											class="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
										>
											Save
										</button>
									</div>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss" global>
	.mockup-window {
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: var(--rounded-box, 1rem);
		padding-top: 1.25rem;
	}
	.mockup-window:before {
		content: '';
		margin-bottom: 1rem;
		display: block;
		aspect-ratio: 1 / 1;
		height: 0.75rem;
		flex-shrink: 0;
		align-self: flex-start;
		border-radius: 9999px;
		opacity: 0.3;
		box-shadow:
			1.4em 0,
			2.8em 0,
			4.2em 0;
	}
	.menu {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		padding: 0.5rem;
	}
	.menu-title {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 700;
		color: var(--fallback-bc, oklch(var(--bc) / 0.4));
	}
	.chat {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}

	.chat-image {
		grid-row: span 2 / span 2;
		align-self: flex-end;
	}

	.chat-header {
		grid-row-start: 1;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.chat-footer {
		grid-row-start: 3;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.chat-bubble {
		position: relative;
		display: block;
		width: -moz-fit-content;
		width: fit-content;
		padding: 0.5rem 1rem;
		max-width: 90%;
		border-radius: var(--rounded-box, 1rem);
		min-height: 2.75rem;
		min-width: 2.75rem;
		--tw-bg-opacity: 1;
		background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
		--tw-text-opacity: 1;
		color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity)));
	}

	.chat-bubble:before {
		position: absolute;
		bottom: 0;
		height: 0.75rem;
		width: 0.75rem;
		background-color: inherit;
		content: '';
		-webkit-mask-size: contain;
		mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
	}

	.chat-start {
		place-items: start;
		grid-template-columns: auto 1fr;
	}

	.chat-start .chat-header,
	.chat-start .chat-footer {
		grid-column-start: 2;
	}

	.chat-start .chat-image {
		grid-column-start: 1;
	}

	.chat-start .chat-bubble {
		grid-column-start: 2;
		border-end-start-radius: 0;
	}

	.chat-start .chat-bubble:before {
		-webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMycgaGVpZ2h0PSczJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGw9J2JsYWNrJyBkPSdtIDAgMyBMIDMgMyBMIDMgMCBDIDMgMSAxIDMgMCAzJy8+PC9zdmc+);
		mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMycgaGVpZ2h0PSczJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGw9J2JsYWNrJyBkPSdtIDAgMyBMIDMgMyBMIDMgMCBDIDMgMSAxIDMgMCAzJy8+PC9zdmc+);
		inset-inline-start: -0.749rem;
	}

	[dir='rtl'] .chat-start .chat-bubble:before {
		-webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMycgaGVpZ2h0PSczJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGw9J2JsYWNrJyBkPSdtIDAgMyBMIDEgMyBMIDMgMyBDIDIgMyAwIDEgMCAwJy8+PC9zdmc+);
		mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMycgaGVpZ2h0PSczJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGw9J2JsYWNrJyBkPSdtIDAgMyBMIDEgMyBMIDMgMyBDIDIgMyAwIDEgMCAwJy8+PC9zdmc+);
	}

	.chat-end {
		place-items: end;
		grid-template-columns: 1fr auto;
	}

	.chat-end .chat-header,
	.chat-end .chat-footer {
		grid-column-start: 1;
	}

	.chat-end .chat-image {
		grid-column-start: 2;
	}

	.chat-end .chat-bubble {
		grid-column-start: 1;
		border-end-end-radius: 0;
	}

	.chat-end .chat-bubble:before {
		-webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMycgaGVpZ2h0PSczJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGw9J2JsYWNrJyBkPSdtIDAgMyBMIDEgMyBMIDMgMyBDIDIgMyAwIDEgMCAwJy8+PC9zdmc+);
		mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMycgaGVpZ2h0PSczJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGw9J2JsYWNrJyBkPSdtIDAgMyBMIDEgMyBMIDMgMyBDIDIgMyAwIDEgMCAwJy8+PC9zdmc+);
		inset-inline-start: 99.9%;
	}

	[dir='rtl'] .chat-end .chat-bubble:before {
		-webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMycgaGVpZ2h0PSczJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGw9J2JsYWNrJyBkPSdtIDAgMyBMIDMgMyBMIDMgMCBDIDMgMSAxIDMgMCAzJy8+PC9zdmc+);
		mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMycgaGVpZ2h0PSczJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGZpbGw9J2JsYWNrJyBkPSdtIDAgMyBMIDMgMyBMIDMgMCBDIDMgMSAxIDMgMCAzJy8+PC9zdmc+);
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: var(--rounded-box, 1rem);
	}

	.card:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.card-body {
		display: flex;
		flex: 1 1 auto;
		flex-direction: column;
		padding: var(--padding-card, 2rem);
		gap: 0.5rem;
	}

	.card-body :where(p) {
		flex-grow: 1;
	}

	.card-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 0.5rem;
	}

	.card figure {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card.image-full {
		display: grid;
	}

	.card.image-full:before {
		position: relative;
		content: '';
		z-index: 10;
		border-radius: var(--rounded-box, 1rem);
		--tw-bg-opacity: 1;
		background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
		opacity: 0.75;
	}

	.card.image-full:before,
	.card.image-full > * {
		grid-column-start: 1;
		grid-row-start: 1;
	}

	.card.image-full > figure img {
		height: 100%;
		object-fit: cover;
	}

	.card.image-full > .card-body {
		position: relative;
		z-index: 20;
		--tw-text-opacity: 1;
		color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity)));
	}
</style>
