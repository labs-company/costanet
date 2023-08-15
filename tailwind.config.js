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
      height: {
        640: "24vh",
        768: "31vh",
        1024: "53vh",
        1280: "75vh",
        1536: "100vh",
      },
    },
    colors: {
      navbar: "#F1F9FE",
      letter: "#274A99",
      white: "#FFFFFF",
      black: "#000000",
      section: "#C1DEEE",
      vermas: "#18007f",
      bgshadow: "#bfccd9ad",
      footer: "#2b2b2b",
    },
  },
  plugins: [],
};
