/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
