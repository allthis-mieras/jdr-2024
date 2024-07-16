/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontWeight: {
			extrabold: '800',
		},
		lineHeight: {
			spacious: '133%',
			normal: '112.5%',
			tight: '1',
			tighter: '80%',
		},
	},
	plugins: [
		require('tailwindcss-fluid-spacing'),
		require('tailwindcss-fluid-type')({
			settings: {
				fontSizeMin: 0.625,
				fontSizeMax: 1.25,
				ratioMin: 1.125,
				ratioMax: 1.2,
				screenMin: 20,
				screenMax: 96,
				unit: 'rem',
				prefix: '',
			},
			values: {
				// ...
				base: 0,
				// ...
			},
		}),
	],
};

//https://github.com/ixkaito/tailwindcss-fluid-spacing
//https://github.com/davidhellmann/tailwindcss-fluid-type
