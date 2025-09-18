/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 👈 make sure React files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
