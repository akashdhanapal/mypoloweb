module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor :{
        'primary' : 'rgb(85 81 227)',
        'secondary' : '#2b2d77',
      }
    },
    fontFamily : {
      'hero-font' : 'Sriracha'
    },
  },
  plugins: [],
}
