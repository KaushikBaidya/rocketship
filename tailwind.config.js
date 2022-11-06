/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920PX',
        // print: { raw: "print" },
      },
      gridTemplateRows: {
        twoRows: '80px 1fr',
        threeRows: '56px 1fr 56px',
        twoRowsReverse: '1fr 44px',
      },
      gridTemplateColumns: {
        layout: '240px 1fr',
      },
      backgroundImage: {
        sbanner: "url('/sbanner.jpg')",
      },
    },
  },
  plugins: [],
}
