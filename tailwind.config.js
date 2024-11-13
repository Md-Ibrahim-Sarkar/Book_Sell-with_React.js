/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-Color': '#00D991',
      },
    },
    daisyui: {
      themes: ["light", "black",]
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      fadeText: 'fadeIn 0.3s ease-in-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}