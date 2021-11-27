module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        blackhue : '#0f0e17',
        whitehue : '#f5f5f5'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
