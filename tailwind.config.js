/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        martel: ['Martel', 'serif'],
         manrope: ['Manrope', 'sans-serif'],
         adamina: ['Adamina'],
         aboreto: ['Aboreto'],
         akatab: ['Akatab', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}