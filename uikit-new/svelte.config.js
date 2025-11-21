import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import examples from 'mdsvexamples/remark'
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],

			smartypants: {
				dashes: 'oldschool'
			},

			remarkPlugins: [[
				examples,
				{
					defaults: {
						Wrapper: '$lib/ExampleWrapper.svelte'

						// or if the component is a named export
						//   Wrapper: ['some-package', 'CustomExample'] // -> import { CustomExample } from 'some-package'
					}
				}
			]],
			rehypePlugins: []
		})
	],
	extensions: ['.svelte', '.md'],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'plantir-uikit': path.resolve('./src/lib')
		}
	}
};

export default config;
