/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontWeight: {
			extrabold: '800'
		},
		lineHeight: {
        'tight': '1',
      }
	},
	plugins: [
    	require('tailwindcss-fluid-spacing'),
		require('tailwindcss-fluid-type'),
  ],
}


