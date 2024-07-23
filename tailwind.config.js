/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-width': '300px',
      },
      height: {
        'custom-height': '450px',
      },
    },
  },
  plugins: [],
}
