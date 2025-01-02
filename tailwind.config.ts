import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'dark-gray': '#1A1A1A',
				'bright-orange': '#E86025',
				'swiper-gray': '#9CA2AA',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],

};
export default config;
