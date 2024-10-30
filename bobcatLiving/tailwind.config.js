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
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease forwards',
        'fade-out': 'fadeOut 0.3s ease forwards',
      },
    },
  },
  plugins: [],
};
