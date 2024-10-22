/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                           // Main HTML file
    './src/**/*.{js,jsx,ts,tsx}',            // All JS and TS files in src
    './src/Components/**/*.{js,jsx,ts,tsx}', // All JS and TS files in Components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
