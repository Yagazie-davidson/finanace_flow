/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"pri-I": "#0328EE",
				"pri-II": "#FFFFFF",
				"pri-III": "#010725",
				"pri-IV": "#010D50",
			},
			screens: {
				tablet: "850px",
			},
		},
	},
	plugins: [],
};
