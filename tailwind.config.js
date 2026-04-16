/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
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
      },
    },
  },
  plugins: [],
}
