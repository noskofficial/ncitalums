/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(({ addBase, theme }) => {
			addBase({
				'.scrollbar': {
					overflowY: 'auto',
					scrollbarColor: `${theme('colors.gray.900')} ${theme('colors.gray.800')}`,
					scrollbarWidth: 'auto',
				},
				'.scrollbar::-webkit-scrollbar': {
					height: '4px',
					width: '4px',
				},
				'.scrollbar::-webkit-scrollbar-thumb': {
					backgroundColor: theme('colors.gray.900'),
				},
				'.scrollbar::-webkit-scrollbar-track-piece': {
					backgroundColor: theme('colors.gray.800'),
				},
			});
		}),
	],
}
