/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         robo:['Roboto'],
      },
      screens:{
        'xs':'412px',
      },
      
    },
  },
  plugins: [],
}