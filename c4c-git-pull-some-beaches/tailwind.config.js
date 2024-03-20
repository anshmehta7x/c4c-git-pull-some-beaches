/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "new-blue": "#8758FF",
        "bg-grey":"#646464"
      }
    },
  },
  plugins: [],
}