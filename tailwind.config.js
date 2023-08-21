/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowus: "0px 0px 16px 20px #bfccd9ad",
      },
    },
    colors: {
      navbar: "#F1F9FE",
      letter: "#274A99",
      white: "#FFFFFF",
      black: "#000000",
      section: "#C1DEEE",
      vermas: {
        50: "#180F7f",
        100: "#18007f",
      },
      bgshadow: "#bfccd9ad",
      footer: "#2b2b2b",
      green: "#128c7e",
      gray: "#e2e8f0",
    },
  },
  plugins: [],
};
