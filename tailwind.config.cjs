/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mob: "400px",
      },
      colors: {
        brand: {
          500: "#8257E5",
          hover: "#996DFF",
        },
        background: "#121212",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("@headlessui/react"),
  ],
};
