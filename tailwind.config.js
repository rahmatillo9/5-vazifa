/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
     "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
     width:{
      "custom": "50px"
     },

     height:{
      "custom": "50px"
     },

      container:{
        padding: 75,
        center: true
      },
      colors:{
        primary:{
          500: "#02897A",
          200: "#EDFFC",
          sss: "#02897A",
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

