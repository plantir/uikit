import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte'],
	// preprocess: vitePreprocess(),
	preprocess: [
		// mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	],
	vitePlugin: {
		inspector: {
			holdMode: true
		}
	},

	kit: {
		adapter: adapter()
	}
};

export default config;
