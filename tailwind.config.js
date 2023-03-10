const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--body-font)",
        navbar: "var(--navbar-font)",
      },
      colors: {
        "dark-purple": "#270722",
        opal: "#9AC2C5",
        "purple-mountain-majesty": "#9882ac",
        "dark-slate-gray": "#35605a",
        goldenrod: "#E6AF2E",
      },
    },
  },
  plugins: [],
};
