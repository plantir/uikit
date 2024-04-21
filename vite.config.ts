import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { purgeCss } from 'vite-plugin-svelte-purgecss';
import examples from 'mdsvexamples/vite';
import path from 'path';
export default defineConfig({
	plugins: [sveltekit(), examples],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
		  'uikit': path.resolve(process.cwd(), './src/lib/index.ts'),
		  'store': path.resolve(process.cwd(), './src/store/index.ts')
		}
	  }
});
