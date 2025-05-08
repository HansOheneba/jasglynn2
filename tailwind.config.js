/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jasglynn: {
          green: "#1A6D57", // Primary emerald green
          yellow: "#D9A741", // Mustard yellow
          lime: "#B6D77E", // Lawn lime green
          coral: "#F28F57", // Coral / Light orange
          sky: "#BFD7EA", // Sky blue
          gray: "#3C3C3C", // Charcoal gray
          white: "#FFFFFF", // White
        },
      },
    },
  },
  plugins: [],
};
