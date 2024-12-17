/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    textColor: {
      white: "#fff",
    },
    colors: {
      skyblue: "#26A3DB",
      white: "#fff",
      black: "#000",
      lightWhite: "rgba(255,255,255,0.5)",
    },
    extend: {
      height: { hn: "calc(100vh - 64px)", "100px": "100px", "50px": "50px" },
      width: { "100px": "100px", "50px": "50px" },
    },
  },
  plugins: [],
};
