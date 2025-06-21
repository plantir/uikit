import path from 'path';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite'
import examples from 'mdsvexamples/vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), examples],
	css: {
		postcss: {
			plugins: [
				// Loop
				
			]
		}
	},
	// test: {
	// 	include: ['src/**/*.{test,spec}.{js,ts}']
	// },
	resolve: {
		alias: {
		  'uikit': path.resolve(process.cwd(), './src/lib/index.ts'),
		}
	  }
});
