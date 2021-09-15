module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sidebarDark: '#1D2B35'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
