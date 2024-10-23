/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'texas-state': "url('./images/background.jpg')"
      }
    },
  },
  plugins: [],
};
