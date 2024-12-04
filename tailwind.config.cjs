/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"],
      },
      colors: {
        black: {
          100: "#CCCCCC",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        blue: {
          100: "#C2CCFF",
          200: "#8095FF",
          300: "#4262FF",
          400: "#002AFF",
          500: "#0020C1",
          600: "#001999",
          700: "#001475",
          800: "#000D4D",
          900: "#000729",
        },
        cream: {
          100: "#FDFDFC",
          200: "#FDFDFC",
          300: "#FBFCF8",
          400: "#FBFCF8",
          500: "#F9FAF5",
          600: "#D2DAB4",
          700: "#A9B870",
          800: "#778542",
          900: "#3A4120",
        },
        brown: {
          100: "#F4EBE6",
          200: "#EBDBD0",
          300: "#E1C7B7",
          400: "#D8B6A2",
          500: "#CDA389",
          600: "#B97F5A",
          700: "#8F5C3D",
          800: "#613E29",
          900: "#2F1E14",
        },
      },
    },
  },
};
