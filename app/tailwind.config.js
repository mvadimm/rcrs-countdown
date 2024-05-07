/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        backgroundColor: "#111",
        borderColor: "rgba(36, 36, 36)",
        mainTextColor: "#eee",
        secondaryTextColor: "#868686",
        buttonColor: "#333",
        buttonHoverColor: "#444",
        mainTableColor: "rgb(29, 29, 29)",
        secondaryTableColor: "rgb(38, 38, 38)",
      },
    },
  },
  plugins: [],
};
