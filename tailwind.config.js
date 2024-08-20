/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/app/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      screens: {
        lg: "1200px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
