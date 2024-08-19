/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#2C3E50',
        secondary: '#E74C3C',
        accent: '#F39C12',
        accent2: '#F5F5DC',
        background: '#ECF0F1',
        textPrimary: '#34495E',
        textSecondary: '#7F8C8D',
      },
    },
  },
  plugins: [],
}

