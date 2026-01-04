<script lang="ts">
	import Button from '../components/Button/Button.svelte';
	import TabItem from '../components/Tabs/TabItem.svelte';
	import Tabs from '../components/Tabs/Tabs.svelte';
	import Switch from '../components/Switch/Switch.svelte';
	import Avatar from '../components/Avatar/Avatar.svelte';
	import TextField from '../components/TextField/TextField.svelte';
	import Checkbox from '../components/Checkbox/Checkbox.svelte';
	import RadioGroup from '../components/RadioGroup/RadioGroup.svelte';
	import Radio from '../components/Radio/Radio.svelte';
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
		'bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95',
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
		class="flex min-h-[550vh] max-w-screen flex-col items-center justify-start xl:flex-row xl:items-start xl:justify-between"
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
								class="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,var(--color-error)_0%,var(--color-secondary)_9%,var(--color-secondary)_42%,var(--color-primary)_47%,var(--color-accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
								aria-hidden="true"
								data-text={'component library'}
							>
							</span>
							<span
								class="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,var(--color-error)_0%,var(--color-secondary)_9%,var(--color-secondary)_42%,var(--color-primary)_47%,var(--color-accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
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
						{@html "Uikit adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>"}
					</p>
					<div class="h-10" />
					<div>
						<div
							class="inline-flex w-full flex-col items-stretch justify-center gap-2 px-4 md:flex-row xl:justify-start xl:px-0"
						>
							<Button href="/docs/components/button" size="lg" class="rounded-full flex-1">
								See Components
							</Button>
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
				<div class="max-w-screen px-2 py-10 lg:px-10 xl:max-w-[50vw]">
					<div class="font-title text-center xl:text-start">
						<h2 class="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none">
							{@html "don't re-invent <br/>the wheel <br/>every time"}
							<img
								loading="lazy"
								width="72"
								height="72"
								alt="yawing face emoji"
								src="/yawning-face@80.webp"
								srcset={`/yawning-face@80.webp`}
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
									{@html "use <span class='text-success'><span class='font-black'>semantic</span> <br />Components</span>"}
									<img
										loading="lazy"
										width="72"
										height="72"
										alt="sunglasses emoji"
										src="/smiling-face-with-sunglasses@80.webp"
										srcset={`/smiling-face-with-sunglasses@80.webp`}
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
			class="invisible sticky bottom-4 flex w-[calc(100%-2rem)] shrink duration-700 xl:visible xl:-end-32 xl:bottom-auto xl:top-16 xl:w-auto xl:transform-none! xl:overflow-x-hidden xl:overflow-y-clip xl:bg-transparent xl:pb-16 xl:pt-16"
			style={`${
				section['hero'] && scrollY > section['hero'].clientHeight * 0.2
					? 'visibility: visible;'
					: ''
			}transform:translateY(${animateValue(section['hero'], [17, 25], [120, 0])}%)`}
		>
			<div
				class="mockup mockup-window bg-base-200/90 xl:bg-base-200 mx-auto origin-top overflow-visible pb-4 backdrop-blur will-change-auto [--rtl-reverse:1] [transform:rotateX(20deg)rotateZ(-20deg)skewY(8deg)scale(1)] rtl:[--rtl-reverse:-1] rtl:[transform:rotateX(20deg)rotateZ(20deg)skewY(-8deg)scale(1)] max-[1279px]:[transform:translate3d(0,0,0)]! xl:-end-20 xl:-me-10 xl:h-128 xl:w-200 xl:rounded-e-none xl:pe-4 xl:shadow-[-0.05rem_0.1rem_0rem_#00000014] xl:backdrop-blur-0"
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
						class="z-1 col-start-1 row-start-1 grid overflow-y-hidden overflow-x-scroll [scrollbar-width:none] xl:visible xl:overflow-x-visible xl:overflow-y-visible [&::-webkit-scrollbar]:hidden"
						class:invisible={section['hero'] && scrollY < section['hero'].clientHeight}
					>
						<!-- flying components -->
						<div
							class="col-start-1 row-start-1 mx-6 flex items-end gap-6 xl:mx-0 xl:items-start xl:gap-0"
						>
							<div class="flex gap-6 xl:w-60 xl:flex-col xl:gap-0">
								<div
									class="relative z-1 w-80 will-change-auto motion-reduce:transform-none! max-[1279px]:[transform:translate3d(0,0,0)]! xl:-start-6 xl:w-auto xl:filter-[drop-shadow(-1rem_3rem_1rem_#00000012)]"
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
														<Switch value={true} color="primary" size="sm">
															<span slot="label" class="label-text text-xs">Faster development</span
															>
														</Switch>
													</div>
													<div class="form-control">
														<Switch value={true} color="secondary" size="sm">
															<span slot="label" class="label-text text-xs">Cleaner HTML</span>
														</Switch>
													</div>
													<div class="form-control">
														<Switch value={true} color="accent" size="sm">
															<span slot="label" class="label-text text-xs">Customizable</span>
														</Switch>
													</div>
													<div class="form-control">
														<Switch value={true} color="success" size="sm">
															<span slot="label" class="label-text text-xs">Themeable</span>
														</Switch>
													</div>

													<div class="form-control">
														<Switch color="error" value={false} size="sm">
															<span slot="label" class="label-text text-xs">More Code</span>
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
															<div class="chat-bubble text-xs in-[.chat]:before:start-[-0.73rem]">
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
										class="flex gap-3 items-center p-4 rounded-btn border-base-300 border will-change-auto motion-reduce:transform-none! motion-reduce:shadow-none! max-[1279px]:[transform:translate3d(0,0,0)]!"
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
										class="flex gap-3 items-center p-4 rounded-btn border-base-300 border will-change-auto motion-reduce:transform-none! motion-reduce:shadow-none! max-[1279px]:[transform:translate3d(0,0,0)]!"
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
									class="flex flex-col rounded-2xl bg-base-100 shadow-xs will-change-auto motion-reduce:transform-none! motion-reduce:shadow-xs! max-[1279px]:[transform:translate3d(0,0,0)]!"
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
												<Checkbox color="primary" size="xs"></Checkbox>
												checkbox-xs
											</div>
											<div
												class="flex flex-col items-center text-[.6rem] text-base-content/70 gap-1"
											>
												<Checkbox color="primary" size="sm"></Checkbox>
												checkbox-sm
											</div>
											<div
												class="flex flex-col items-center text-[.6rem] text-base-content/70 gap-1"
											>
												<Checkbox color="primary" size="md"></Checkbox>
												checkbox-md
											</div>
											<div
												class="flex flex-col items-center text-[.6rem] text-base-content/70 gap-1"
											>
												<Checkbox color="primary" size="lg"></Checkbox>
												checkbox-lg
											</div>
										</div>
										<RadioGroup class="grid! grid-cols-4 items-end gap-4 w-full">
											<div class="flex flex-col items-center gap-1">
												<Radio color="secondary" value="xs" size="xs"></Radio>
												<span class="text-base-content/70 text-[.6rem]">radio-xs</span>
											</div>
											<div class="flex flex-col items-center gap-1">
												<Radio color="secondary" value="sm" size="sm"></Radio>
												<span class="text-base-content/70 text-[.6rem]">radio-sm</span>
											</div>
											<div class="flex flex-col items-center gap-1">
												<Radio color="secondary" value="md" size="md"></Radio>
												<span class="text-base-content/70 text-[.6rem]">radio-md</span>
											</div>
											<div class="flex flex-col items-center gap-1">
												<Radio color="secondary" value="lg" size="lg"></Radio>
												<span class="text-base-content/70 text-[.6rem]">radio-lg</span>
											</div>
										</RadioGroup>
									</div>
								</div>
								<div
									class="flex flex-col rounded-2xl bg-base-100 shadow-xs will-change-auto motion-reduce:transform-none! motion-reduce:shadow-xs! max-[1279px]:[transform:translate3d(0,0,0)]!"
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
	<div class="w-full px-2 py-10 md:py-20 lg:py-40 lg:px-10" bind:this={section['nextlevel']}>
		<div class="text-center">
			<h2
				class="font-title relative z-2 mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none will-change-auto [transform:translate3d(0,0,0)] motion-reduce:tracking-normal! max-[1279px]:tracking-normal!"
				style={`letter-spacing:${animateValue(section['nextlevel'], [-100, 20], [1, 0])}rem`}
			>
				Take Tailwind CSS
				<br />
				<span
					class="bg-[linear-gradient(90deg,var(--color-error)_0%,var(--color-secondary)_9%,var(--color-secondary)_42%,var(--color-primary)_47%,var(--color-accent)_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:tracking-normal! max-[1279px]:tracking-normal! [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
					style={`letter-spacing:${animateValue(section['nextlevel'], [-100, 20], [0, 1])}rem`}
				>
					to the next level
				</span>
			</h2>
			<p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
				{@html 'Uikit adds components to Tailwind CSS<br />for Svelete library.<br />components  like'}
				<a target="_blank" href="/docs/component/button/" class="text-primary">Button</a>
				,
				<a target="_blank" href="/docs/component/tabs/" class="text-primary">Tabs</a>
				,
				<a target="_blank" href="/docs/component/switch/" class="text-primary">Switch</a>
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
				<div class="w-full px-2 py-10 md:py-20 lg:py-40 lg:px-10">
					<div class="text-center">
						<h2
							class="font-title relative z-2 mx-auto text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none"
						>
							<span
								class="motion-reduce:opacity-100!"
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
								class="motion-reduce:opacity-100!"
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
								class="motion-reduce:opacity-100!"
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
								class="motion-reduce:opacity-100!"
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
						<p class="text-base-content/70 font-title relative z-2 py-4 font-light md:text-3xl">
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
								Tailwind + Uikit
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
										>w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100</span
									>&quot; /&gt;
		  &lt;label class=&quot;<span class="text-rose-600"
										>flex cursor-pointer items-center justify-between p-1</span
									>&quot;&gt;
			Accept terms of use
			&lt;div class=&quot;<span class="text-rose-600">relative inline-block</span>&quot;&gt;
			  &lt;input type=&quot;checkbox&quot; class=&quot;<span class="text-rose-600"
										>peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2</span
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
										>peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2</span
									>&quot; /&gt;
			  &lt;span class=&quot;<span class="text-rose-600"
										>pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900</span
									>&quot;&gt;&lt;/span&gt;
			&lt;/div&gt;
		  &lt;/label&gt;
		  &lt;button class=&quot;<span class="text-rose-600"
										>inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95</span
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
											class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-hidden focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100"
										/>
										<label class="flex cursor-pointer items-center justify-between p-1">
											Accept terms of use
											<div class="relative inline-block">
												<input
													name="sample-checkbox"
													type="checkbox"
													class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
												/>
												<span
													class="pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900"
												></span>
											</div>
										</label>
										<label class="flex cursor-pointer items-center justify-between p-1">
											Submit to newsletter
											<span class="relative inline-block">
												<input
													type="checkbox"
													name="sample-checkbox"
													class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
												/>
												<span
													class="pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900"
												/>
											</span>
										</label>
										<button
											class="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
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

<style global>@layer theme, base, components, utilities;

@layer theme {
  @theme default {
    --font-sans:
      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;

    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);

    --color-orange-50: oklch(98% 0.016 73.684);
    --color-orange-100: oklch(95.4% 0.038 75.164);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-300: oklch(83.7% 0.128 66.29);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-700: oklch(55.3% 0.195 38.402);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-orange-900: oklch(40.8% 0.123 38.172);
    --color-orange-950: oklch(26.6% 0.079 36.259);

    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-400: oklch(82.8% 0.189 84.429);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-amber-900: oklch(41.4% 0.112 45.904);
    --color-amber-950: oklch(27.9% 0.077 45.635);

    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-100: oklch(97.3% 0.071 103.193);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-400: oklch(85.2% 0.199 91.936);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-yellow-950: oklch(28.6% 0.066 53.813);

    --color-lime-50: oklch(98.6% 0.031 120.757);
    --color-lime-100: oklch(96.7% 0.067 122.328);
    --color-lime-200: oklch(93.8% 0.127 124.321);
    --color-lime-300: oklch(89.7% 0.196 126.665);
    --color-lime-400: oklch(84.1% 0.238 128.85);
    --color-lime-500: oklch(76.8% 0.233 130.85);
    --color-lime-600: oklch(64.8% 0.2 131.684);
    --color-lime-700: oklch(53.2% 0.157 131.589);
    --color-lime-800: oklch(45.3% 0.124 130.933);
    --color-lime-900: oklch(40.5% 0.101 131.063);
    --color-lime-950: oklch(27.4% 0.072 132.109);

    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-green-950: oklch(26.6% 0.065 152.934);

    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-400: oklch(76.5% 0.177 163.223);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-emerald-950: oklch(26.2% 0.051 172.552);

    --color-teal-50: oklch(98.4% 0.014 180.72);
    --color-teal-100: oklch(95.3% 0.051 180.801);
    --color-teal-200: oklch(91% 0.096 180.426);
    --color-teal-300: oklch(85.5% 0.138 181.071);
    --color-teal-400: oklch(77.7% 0.152 181.912);
    --color-teal-500: oklch(70.4% 0.14 182.503);
    --color-teal-600: oklch(60% 0.118 184.704);
    --color-teal-700: oklch(51.1% 0.096 186.391);
    --color-teal-800: oklch(43.7% 0.078 188.216);
    --color-teal-900: oklch(38.6% 0.063 188.416);
    --color-teal-950: oklch(27.7% 0.046 192.524);

    --color-cyan-50: oklch(98.4% 0.019 200.873);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-200: oklch(91.7% 0.08 205.041);
    --color-cyan-300: oklch(86.5% 0.127 207.078);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-500: oklch(71.5% 0.143 215.221);
    --color-cyan-600: oklch(60.9% 0.126 221.723);
    --color-cyan-700: oklch(52% 0.105 223.128);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-cyan-900: oklch(39.8% 0.07 227.392);
    --color-cyan-950: oklch(30.2% 0.056 229.695);

    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-300: oklch(82.8% 0.111 230.318);
    --color-sky-400: oklch(74.6% 0.16 232.661);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-sky-600: oklch(58.8% 0.158 241.966);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-sky-800: oklch(44.3% 0.11 240.79);
    --color-sky-900: oklch(39.1% 0.09 240.876);
    --color-sky-950: oklch(29.3% 0.066 243.157);

    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);

    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-400: oklch(67.3% 0.182 276.935);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-800: oklch(39.8% 0.195 277.366);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-indigo-950: oklch(25.7% 0.09 281.288);

    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-violet-800: oklch(43.2% 0.232 292.759);
    --color-violet-900: oklch(38% 0.189 293.745);
    --color-violet-950: oklch(28.3% 0.141 291.089);

    --color-purple-50: oklch(97.7% 0.014 308.299);
    --color-purple-100: oklch(94.6% 0.033 307.174);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-300: oklch(82.7% 0.119 306.383);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-purple-700: oklch(49.6% 0.265 301.924);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-purple-900: oklch(38.1% 0.176 304.987);
    --color-purple-950: oklch(29.1% 0.149 302.717);

    --color-fuchsia-50: oklch(97.7% 0.017 320.058);
    --color-fuchsia-100: oklch(95.2% 0.037 318.852);
    --color-fuchsia-200: oklch(90.3% 0.076 319.62);
    --color-fuchsia-300: oklch(83.3% 0.145 321.434);
    --color-fuchsia-400: oklch(74% 0.238 322.16);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-fuchsia-600: oklch(59.1% 0.293 322.896);
    --color-fuchsia-700: oklch(51.8% 0.253 323.949);
    --color-fuchsia-800: oklch(45.2% 0.211 324.591);
    --color-fuchsia-900: oklch(40.1% 0.17 325.612);
    --color-fuchsia-950: oklch(29.3% 0.136 325.661);

    --color-pink-50: oklch(97.1% 0.014 343.198);
    --color-pink-100: oklch(94.8% 0.028 342.258);
    --color-pink-200: oklch(89.9% 0.061 343.231);
    --color-pink-300: oklch(82.3% 0.12 346.018);
    --color-pink-400: oklch(71.8% 0.202 349.761);
    --color-pink-500: oklch(65.6% 0.241 354.308);
    --color-pink-600: oklch(59.2% 0.249 0.584);
    --color-pink-700: oklch(52.5% 0.223 3.958);
    --color-pink-800: oklch(45.9% 0.187 3.815);
    --color-pink-900: oklch(40.8% 0.153 2.432);
    --color-pink-950: oklch(28.4% 0.109 3.907);

    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-300: oklch(81% 0.117 11.638);
    --color-rose-400: oklch(71.2% 0.194 13.428);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-rose-800: oklch(45.5% 0.188 13.697);
    --color-rose-900: oklch(41% 0.159 10.272);
    --color-rose-950: oklch(27.1% 0.105 12.094);

    --color-slate-50: oklch(98.4% 0.003 247.858);
    --color-slate-100: oklch(96.8% 0.007 247.896);
    --color-slate-200: oklch(92.9% 0.013 255.508);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-400: oklch(70.4% 0.04 256.788);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-slate-950: oklch(12.9% 0.042 264.695);

    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-gray-950: oklch(13% 0.028 261.692);

    --color-zinc-50: oklch(98.5% 0 0);
    --color-zinc-100: oklch(96.7% 0.001 286.375);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-300: oklch(87.1% 0.006 286.286);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-zinc-950: oklch(14.1% 0.005 285.823);

    --color-neutral-50: oklch(98.5% 0 0);
    --color-neutral-100: oklch(97% 0 0);
    --color-neutral-200: oklch(92.2% 0 0);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-600: oklch(43.9% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-neutral-800: oklch(26.9% 0 0);
    --color-neutral-900: oklch(20.5% 0 0);
    --color-neutral-950: oklch(14.5% 0 0);

    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-100: oklch(97% 0.001 106.424);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-300: oklch(86.9% 0.005 56.366);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-600: oklch(44.4% 0.011 73.639);
    --color-stone-700: oklch(37.4% 0.01 67.558);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);

    --color-black: #000;
    --color-white: #fff;

    --spacing: 0.25rem;

    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;

    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;

    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --text-9xl: 8rem;
    --text-9xl--line-height: 1;

    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;

    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;

    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;

    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;

    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md:
      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg:
      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl:
      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
    --text-shadow-sm:
      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),
      0px 2px 2px rgb(0 0 0 / 0.075);
    --text-shadow-md:
      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),
      0px 2px 4px rgb(0 0 0 / 0.1);
    --text-shadow-lg:
      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),
      0px 4px 8px rgb(0 0 0 / 0.1);

    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --animate-bounce: bounce 1s infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes pulse {
      50% {
        opacity: 0.5;
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }

      50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;

    --perspective-dramatic: 100px;
    --perspective-near: 300px;
    --perspective-normal: 500px;
    --perspective-midrange: 800px;
    --perspective-distant: 1200px;

    --aspect-video: 16 / 9;

    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: --theme(--font-sans, initial);
    --default-font-feature-settings: --theme(
      --font-sans--font-feature-settings,
      initial
    );
    --default-font-variation-settings: --theme(
      --font-sans--font-variation-settings,
      initial
    );
    --default-mono-font-family: --theme(--font-mono, initial);
    --default-mono-font-feature-settings: --theme(
      --font-mono--font-feature-settings,
      initial
    );
    --default-mono-font-variation-settings: --theme(
      --font-mono--font-variation-settings,
      initial
    );
  }

  /* Deprecated */
  @theme default inline reference {
    --blur: 8px;
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
    --radius: 0.25rem;
    --max-width-prose: 65ch;
  }
}

@layer base {
  /*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 2 */
    border: 0 solid; /* 3 */
  }

  /*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured `sans` font-family by default.
  5. Use the user's configured `sans` font-feature-settings by default.
  6. Use the user's configured `sans` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

  html,
  :host {
    line-height: 1.5; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    tab-size: 4; /* 3 */
    font-family: --theme(
      --default-font-family,
      ui-sans-serif,
      system-ui,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    ); /* 4 */
    font-feature-settings: --theme(
      --default-font-feature-settings,
      normal
    ); /* 5 */
    font-variation-settings: --theme(
      --default-font-variation-settings,
      normal
    ); /* 6 */
    -webkit-tap-highlight-color: transparent; /* 7 */
  }

  /*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

  hr {
    height: 0; /* 1 */
    color: inherit; /* 2 */
    border-top-width: 1px; /* 3 */
  }

  /*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  /*
  Remove the default font size and weight for headings.
*/

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  /*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }

  /*
  Add the correct font weight in Edge and Safari.
*/

  b,
  strong {
    font-weight: bolder;
  }

  /*
  1. Use the user's configured `mono` font-family by default.
  2. Use the user's configured `mono` font-feature-settings by default.
  3. Use the user's configured `mono` font-variation-settings by default.
  4. Correct the odd `em` font sizing in all browsers.
*/

  code,
  kbd,
  samp,
  pre {
    font-family: --theme(
      --default-mono-font-family,
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      "Liberation Mono",
      "Courier New",
      monospace
    ); /* 1 */
    font-feature-settings: --theme(
      --default-mono-font-feature-settings,
      normal
    ); /* 2 */
    font-variation-settings: --theme(
      --default-mono-font-variation-settings,
      normal
    ); /* 3 */
    font-size: 1em; /* 4 */
  }

  /*
  Add the correct font size in all browsers.
*/

  small {
    font-size: 80%;
  }

  /*
  Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

  table {
    text-indent: 0; /* 1 */
    border-color: inherit; /* 2 */
    border-collapse: collapse; /* 3 */
  }

  /*
  Use the modern Firefox focus style for all focusable elements.
*/

  :-moz-focusring {
    outline: auto;
  }

  /*
  Add the correct vertical alignment in Chrome and Firefox.
*/

  progress {
    vertical-align: baseline;
  }

  /*
  Add the correct display in Chrome and Safari.
*/

  summary {
    display: list-item;
  }

  /*
  Make lists unstyled by default.
*/

  ol,
  ul,
  menu {
    list-style: none;
  }

  /*
  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; /* 1 */
    vertical-align: middle; /* 2 */
  }

  /*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  /*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

  button,
  input,
  select,
  optgroup,
  textarea,
  ::file-selector-button {
    font: inherit; /* 1 */
    font-feature-settings: inherit; /* 1 */
    font-variation-settings: inherit; /* 1 */
    letter-spacing: inherit; /* 1 */
    color: inherit; /* 1 */
    border-radius: 0; /* 2 */
    background-color: transparent; /* 3 */
    opacity: 1; /* 4 */
  }

  /*
  Restore default font weight.
*/

  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  /*
  Restore indentation.
*/

  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  /*
  Restore space after button.
*/

  ::file-selector-button {
    margin-inline-end: 4px;
  }

  /*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

  ::placeholder {
    opacity: 1;
  }

  /*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using `color-mix(…)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
    (contain-intrinsic-size: 1px) /* Safari 17+ */ {
    ::placeholder {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }

  /*
  Prevent resizing textareas horizontally by default.
*/

  textarea {
    resize: vertical;
  }

  /*
  Remove the inner padding in Chrome and Safari on macOS.
*/

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

  ::-webkit-date-and-time-value {
    min-height: 1lh; /* 1 */
    text-align: inherit; /* 2 */
  }

  /*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.
*/

  ::-webkit-datetime-edit {
    display: inline-flex;
  }

  /*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  ::-webkit-datetime-edit,
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field,
  ::-webkit-datetime-edit-second-field,
  ::-webkit-datetime-edit-millisecond-field,
  ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }

  /*
  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }

  /*
  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

  :-moz-ui-invalid {
    box-shadow: none;
  }

  /*
  Correct the inability to style the border radius in iOS Safari.
*/

  button,
  input:where([type="button"], [type="reset"], [type="submit"]),
  ::file-selector-button {
    appearance: button;
  }

  /*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}

@layer utilities {
  @tailwind utilities;
}

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
