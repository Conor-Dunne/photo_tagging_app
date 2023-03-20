/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'metal-pattern': "url('/assets/background-texture-metal-scratches.jpg')",
      }
    },
  },
  plugins: [],
}
