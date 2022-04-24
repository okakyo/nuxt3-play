module.exports = {
	content: [
		'./app.vue',
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue'
	],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		borderColor: {
			DEFAULT: '#cbd5e1'
		},
		colors: {
			transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
			gray: {
				50: '#f9fafb',
				100: '#f3f4f6',
				200: '#e5e7eb',
				700: '#374151',
				800: '#1f2937',
				900: '#1f2937'
			}
		},
		extend: {
			colors: {
				base: '#e5e7eb',
				main: '#059669',
				accent: '#fb923c'
			}
		}
	},
	plugins: []
};
