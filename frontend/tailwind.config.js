/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a", // dark blue
          light: "#3b82f6", // light blue
          dark: "#1e40af", // darker blue
        },
        secondary: {
          DEFAULT: "#fbbf24", // yellow
          light: "#fcd34d", // light yellow
          dark: "#f59e0b", // darker yellow
        },
      },
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
