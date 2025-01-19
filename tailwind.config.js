/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      crimsonText: ["Crimson Text", "serif"],
      afacadFlux: ["Afacad Flux", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "720px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        carrotOrange: "#f4942c",
      },
      boxShadow: {
        top: "0 -0.5px 0.5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}
