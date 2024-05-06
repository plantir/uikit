import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte'],
	// preprocess: vitePreprocess(),
	preprocess: [
		vitePreprocess(),
		preprocess({
			scss: {
				prependData: `@import './src/component.scss';`
			}
		})
	],
	vitePlugin: {
		inspector: {
			holdMode: true
		}
	},

	kit: {
		adapter: adapterNode()
		// adapter: adapter({
		//     fallback: '/index.html'
		// })
	}
};

export default config;
