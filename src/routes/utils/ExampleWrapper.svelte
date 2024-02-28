<script lang="ts">
	import { onMount } from 'svelte';
	export let divClass = 'w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6';

	// the source of the example, if you want it
	export let src: any = undefined;

	// all meta tags of the code block
	export let meta: any = undefined;

	let browserSupport: boolean = false;
	let code: HTMLElement;
	let iframe: HTMLIFrameElement;
	let iframeLoad: boolean = false;
	let codeResponsiveContent: HTMLDivElement;

	// https://github.com/themesberg/flowbite-svelte/blob/main/src/routes/docs/components/accordion.md#always-open
	const gitHub = new URL('https://github.com/themesberg/flowbite-svelte/blob/main/src/routes/');

	let path: URL;

	// suppress vite-plugin-svelte warning about unused props
	$: src, meta;

	let showExpandButton: boolean = false;
	let expand: boolean = false;
	let dark: boolean = false;
	let rtl: NotificationDirection | undefined = undefined;
	let responsiveDevice: keyof typeof responsiveSize = 'desktop';

	const responsiveSize = {
		mobile: 'max-w-sm',
		tablet: 'max-w-lg',
		desktop: ''
	};

	function updateDarkMode(ev: Event) {
		const target = ev.target as HTMLElement,
			isDark = target.ownerDocument.documentElement.classList.contains('dark');
		dark = isDark;
	}

	function init(node: HTMLElement) {
		browserSupport = !!window?.navigator?.clipboard;
		const button: HTMLButtonElement = node.ownerDocument.querySelector(
			'button[aria-label="Dark mode"]'
		) as HTMLButtonElement;
		button?.addEventListener('click', updateDarkMode);

		dark = node.ownerDocument.documentElement.classList.contains('dark');

		return {
			destroy() {
				button?.removeEventListener('click', updateDarkMode);
			}
		};
	}

	let node: HTMLElement;
	$: {
		if (node) {
			// find closes previous section anchor
			const section = [...document.querySelectorAll('#mainContent > :where(h2, h3) > [id]')]
				.map((x: Element) => ({ id: x.id, top: x.parentElement?.offsetTop ?? Infinity }))
				.filter((x) => x.top < node.offsetTop)
				.slice(-1)
				.shift();

			if (section) {
				const pathname = new URL(node.baseURI).pathname;
				path = new URL(pathname.slice(1) + '.md', gitHub);
				path.hash = section.id.replaceAll('_', '-').replaceAll('/', '').toLowerCase();
			}
		}
	}

	const copyToClipboard = async (e: MouseEvent) => {
		const REG_HEX = /&#x([a-fA-F0-9]+);/g;
		const decodedText = code.innerText.replace(REG_HEX, function (_match, group1) {
			const num = parseInt(group1, 16);
			return String.fromCharCode(num);
		});

		await window.navigator.clipboard.writeText(decodedText);

		const button: HTMLButtonElement | null = e?.target as HTMLButtonElement;
		button?.blur();

		const lastChild = button?.lastChild;
		if (lastChild) {
			lastChild.textContent = 'Copied';
			setTimeout(() => (lastChild.textContent = 'Copy'), 3000);
		}
	};

	function checkOverflow(el: HTMLElement) {
		const isOverflowingY = el.clientHeight < el.scrollHeight;
		showExpandButton = isOverflowingY;
		el.firstElementChild?.classList.add('-mb-8');
	}

	let copy_text = 'Copy';

	const injectContent = () => {
		iframeLoad = true;
		// get only css and style frome head
		const externalCss = document.querySelectorAll(
			'head link[href*="https://"][rel="stylesheet"], head style'
		);
		const internalCss = Array.from(document.styleSheets).filter((el) =>
			el.href?.includes(document.location.hostname)
		);
		// extract style to avoid multiple network request to css
		const extractInlineCss = internalCss.reduce((acc, el) => {
			acc += Array.from(el.cssRules)
				.map((rule) => rule.cssText)
				.join(' ');
			return acc;
		}, '');
		const styleTag = document.createElement('style');
		styleTag.innerHTML = extractInlineCss;
		// extract outerHtlm in order to clone html
		const headContent = Array.from(externalCss).reduce((acc, el) => (acc += el.outerHTML), '');
		// put the content of head in the head of the iframe
		iframe.contentDocument?.head.insertAdjacentHTML(
			'beforeend',
			`${headContent}${styleTag.outerHTML}` || ''
		);
		// append the component content in the iframe body
		iframe.contentDocument?.body.append(...iframe.childNodes);
		// update the height of the preview based on the height of the iframe content
		updateHeightContent();
		// listen change on height of the iframe content and update the preview height
		if (iframe.contentDocument?.body.firstChild) {
			const resizeObserver = new ResizeObserver(updateHeightContent);
			resizeObserver.observe(iframe.contentDocument.body.firstElementChild as Element);
		}
		iframe = iframe;
	};

	const updateHeightContent = () => {
		if (codeResponsiveContent) {
			codeResponsiveContent.style.height = `${(iframe.contentDocument?.body?.firstElementChild as HTMLDivElement)?.offsetHeight || 0}px`;
		}
	};

	onMount(() => {
		// workaround for svelte issue https://github.com/sveltejs/svelte/issues/6967
		setTimeout(() => {
			if (iframe && !iframeLoad) {
				iframe.dispatchEvent(new Event('load'));
			}
		}, 500);
	});

	$: {
		if (iframe) {
			// toggle dark mode class in the iframe
			dark
				? iframe?.contentDocument?.documentElement.classList.add('dark')
				: iframe?.contentDocument?.documentElement.classList.remove('dark');
		}
	}

	$: {
		if (iframe && iframe.contentDocument) {
			// toggle dir value in the iframe
			iframe.contentDocument.documentElement.dir = rtl ?? '';
		}
	}
</script>

<div class="mt-8 code-example" bind:this={node} use:init></div>
