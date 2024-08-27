/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        30: "7.5rem",
      },
      fontFamily: {
        sans: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "sans-serif"],
      },
      fontSize: {
        xs: "0.7rem",
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
