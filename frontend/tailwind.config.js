/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        celo: "#35D07F",
        farcaster: "#855CF8",
      },
    },
  },
  plugins: [],
};
