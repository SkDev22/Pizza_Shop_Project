/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Pacifico: ["Pacifico", "sans-serif"],
        Satisfy: ["Satisfy", "sans-serif"],
      },
      colors: {
        white: {
          low: "#FEFEFA",
          medium: "#FFEFD5",
          high: "#FFFFFF",
        },
        Black: {
          rich: "#010B13",
        },
        Blue: {
          blue: "#2454FF",
        },
        Red: {
          red: "#ED2839",
        },
      },
    },
    plugins: [],
  },
};
