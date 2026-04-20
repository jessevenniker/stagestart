/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // hover: classes alleen toepassen op devices met een echte pointer.
  // Voorkomt sticky-hover op iOS waar een tap eerst :hover firet en
  // het effect blijft "plakken" tot een volgende tap.
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        terra:  '#D4522A',
        gold:   '#F2B517',
        sage:   '#3EAD6E',
        sky:    '#1A7EC5',
        blush:  '#E8507A',
        cream:  '#FFF4E0',
        dark:   '#1A1714',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        hand:  ['Caveat', 'Bradley Hand', 'cursive'],
      },
    },
  },
  plugins: [],
}
