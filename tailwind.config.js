   /** @type {import('tailwindcss').Config} */
   module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#ed8338',
          'secondary': '#f9c164',
          'warning': '#f6eb9a',
          'background': '#f3f4f6',
        },

        keyframes: {
          wiggleRight: {
            '0%, 100%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(8px)' },
          },
        },
        animation: {
          wiggleRight: 'wiggleRight 1s ease-in-out infinite',
        },
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    plugins: [],
  }