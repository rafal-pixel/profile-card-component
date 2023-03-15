/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
    },
    colors: {
      "dark-cyan": "hsl(185, 75%, 39%)",
      "very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
      "dark-grayish-blue": "hsl(227, 10%, 46%)",
      "dark-gray": "hsl(0, 0%, 59%)",
      "white": "hsl(0, 0%, 100%)",
    },
    fontSize: {
      'main-size': '1.125rem'
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    screens: {
      sm: {
        max: "639px"
      }, 
    },
  },
  plugins: [],
};