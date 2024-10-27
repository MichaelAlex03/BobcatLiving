/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      height: {
        screen: "calc(100vh - 92px)",
      },
      backgroundImage: {
        "texas-state": "url('./images/background.jpg')",
      },
    },
  },
  plugins: [],
};
