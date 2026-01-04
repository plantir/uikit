import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import examples from 'mdsvexamples/vite';
import path from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), examples],
	resolve: {
		alias: {
			'#app.css': path.resolve(__dirname, './src/lib/css/app.css')
		}
	}
});
