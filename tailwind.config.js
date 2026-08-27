// @type {import('tailwindcss').Config} 
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",
        secondary: "#06b6d4",
        dark: "#07070a",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};
