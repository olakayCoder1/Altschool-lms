/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        merriweather:[ 'Merriweather', 'serif'],
        noto: ['Noto Sans', 'sans-serif'],
        logo : ['Rampart One', 'cursive']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
