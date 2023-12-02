/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
 
  theme: {
    extend: {
      fontSize: {
        'base': '25px', 
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}