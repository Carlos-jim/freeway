module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hover-link': '#6147FF',
        'success-color-btn': '#40E146',
        'hover-success-color-btn': '#00BB07',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
