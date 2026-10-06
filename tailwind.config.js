/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf7ef",
        linen: "#efe4d3",
        champagne: "#d6bd87",
        espresso: "#211711",
        charcoal: "#171717",
        clay: "#8f6a56",
        pearl: "#fffdf8",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(28, 18, 12, 0.12)",
      },
    },
  },
  plugins: [],
};
