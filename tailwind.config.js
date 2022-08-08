/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920PX",
        // print: { raw: "print" },
      },
      backgroundImage: {
        sbanner: "url('/sbanner.jpg')",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
