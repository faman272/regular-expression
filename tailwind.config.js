/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,css}",
    "./src/styles/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        accent: "#36b7e6"
      }
    },
  },
  plugins: [],
}

