/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        'bg-primary': '#17201D',
        'bg-secondary': '#009165' 
      }
    },
  },
  plugins: [],
}

