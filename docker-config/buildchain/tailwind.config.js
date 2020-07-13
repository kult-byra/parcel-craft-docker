module.exports = {
	theme: {
		fontFamily: {
			sans: ['Basis Grotesque', 'sans-serif'],
			serif: ['Chap', 'serif'],
		},
		extend: {
			colors: {
				white: '#FFFFFF',
				'light-blue': '#8ABBD0',
				'blue-contrast' : '#509AB9',
				blue: '#44A5B0',
				dark: '#2C2131',
				'light-red': '#FD484F',
				'dark-red': '#802537',
				red: '#802537',
				'beige': '#F4F5F0',
				'light-beige' : '#F9FAF7',
				'dark-beige': '#F1F2EC',
			},
			inset: {
				'1': '1rem',
				'1/2em': '0.5rem'
			},
			fontSize: {
				'4-5xl': '2.7rem',
				'7xl': '4.3rem'
			},
			height: {
				'1px': '1px'
			},
			lineHeight: {
			       'xs': '1.1'
			}
		}
	},
	variants: {
		inset: ['responsive', 'hover', 'focus', 'group-hover'],
		borderWidth: ['responsive', 'hover', 'focus', 'group-hover', 'first'],
		opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		textColor: ['responsive', 'hover', 'focus', 'group-hover'],
		margin: ['responsive','even', 'hover', 'odd','group-hover'],
	},
	plugins: [require('@tailwindcss/ui')]
};
