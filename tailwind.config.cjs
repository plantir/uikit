/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,html,js,ts}'],
	safelist: [],
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'luxury', 'aqua', 'synthwave'],
		prefix: 'daisy-'
	}
};
