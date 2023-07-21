/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
      bgshadow: "#bfccd9ad",
      footerbgcolor: "#2b2b2b",
    
    },
  },
  plugins: [require("flowbite/plugin")],
};
// box-shadow: ;
