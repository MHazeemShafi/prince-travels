/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0f9f9',
          100: '#ccf2f4',
          200: '#99e5ea',
          300: '#66d8e0',
          400: '#33cbda',
          500: '#087B8D', // Primary teal
          600: '#075D6B', // Dark teal
          700: '#06424d',
          800: '#052a32',
          900: '#041e22',
        },
      },
    },
  },
  plugins: [],
}