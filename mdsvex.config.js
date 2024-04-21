import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	layout: {
		componentLayout: './src/routes/layouts/component/+page.svelte'
	},
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		alias: { yavascript: "javascript" }
	}
});

export default config;
