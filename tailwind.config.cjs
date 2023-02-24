/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      "bounce": "bounce 2s ease-in-out infinite",
      "scale": "scale 2s ease-in-out infinite",
    },
  },
  plugins: [],
};
