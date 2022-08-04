/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      title: "Righteous",
      body: "Roboto Slab",
    },
    extend: {
      colors: {
        dark: "#444",
        primary: "#266A94",
        secondary: "#E0AD66",
        primlight: "#67B2E0",
        seclight: "#FFD08F",
        secdark: "#946C35",
      },
    },
  },
  plugins: [],
};
