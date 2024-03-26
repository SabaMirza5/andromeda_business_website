/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    
    extend: {
      colors:{
        'bg-color':'#4f4f4f',  
        'maincolor':'#e3c249',
        'text-gray':'hsla(0, 0%, 100%, .7)',
      },
      letterSpacing:{
        'tracking-4':'4px',
      }
      
    },
  },
  plugins: [],
}






