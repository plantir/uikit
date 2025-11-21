import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import examples from 'mdsvexamples/vite'

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), examples]
});
