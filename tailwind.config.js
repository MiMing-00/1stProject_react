/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slider: "slider 30s linear infinite",
      },
    },
  },
  plugins: [],
};
