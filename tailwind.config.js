/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/public/images/homebg.jpg')",
        'map-bg': "url('/public/images/mapsbg.jpg')",
      },
      colors: {
        r6sRed: "#E03C31",      // R6 Siege signature red
        r6sOrange: "#FF5F1F",
        r6sGray: "#6B7280",
        r6sDark: "#1F2937",
        r6sWhite: "#FFFFFF",
      },
      fontFamily: {
        r6s: ["Orbitron", "sans-serif"]
      },
    },
  },
  plugins: [],
};
