/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        violet: "hsl(257, 40%, 49%)",
        "soft-magenta": "hsl(300, 69%, 71%)",
      },
      screens: {
        tablet: "700px",
      },
    },
  },
  plugins: [],
};
