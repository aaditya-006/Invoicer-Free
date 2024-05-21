/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      colors: {
        'primary': '#2d3250',
        'secondary': '#8b8fb1',
        'third': '#424769',
        'text': '#ffffff',
        'fourth': '#f8b179',
      },
    }
  },
  plugins: [],
}

