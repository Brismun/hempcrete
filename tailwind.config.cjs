/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Montserrat", "Serif"],
      },
      screens: {
        gg: "700px",
      },
    },
  },
  plugins: [],
};
