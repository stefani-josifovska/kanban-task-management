/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "bold"],
      },
      margin: {
        "10%": "10%",
      },
      colors: {
        "main-purple": "#635FC7",
        "hover-purple": "#A8A4FF",
      },
    },
  },
  plugins: [],
};
