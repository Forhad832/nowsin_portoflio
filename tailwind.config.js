/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '200': '2',
      }
    },
  },
  plugins: [],
}

