/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#e57f9e',
					light: '#f9d5e5',
					dark: '#c25c7c',
				},
				secondary: '#f9d5e5',
				accent: '#ffa5c3',
			},
		},
	},
	plugins: [],
};