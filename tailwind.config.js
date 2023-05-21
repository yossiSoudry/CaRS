module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'dark': '#20232B',
        'secondary': '#33373E',
        'light-gray': '#F7F7F7',
      },
      borderWidth: {
        1: '1px',
      },
      width: {
        120: '31rem',
      },
      borderColor: {
        color: 'rgba(2, 28, 9, 0.2)',
      },
    },
  },
  // plugins: [],
};