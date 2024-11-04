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
      themes: false,
    },
  },
  plugins: [
    require('daisyui'),
  ],
}