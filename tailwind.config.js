/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      
      
      keyframes: {
        'a7a': {
          '0%, 100%': { transform: 'translatey(24px)' },
          '50%': { transform: 'translatey(0px)' },
        },          
      },
      animation: {
        'a7a': 'a7a 1s ease-in-out infinite' 
      },
      colors:{
        'primary': '#FF6F61',
      }, 
      backgroundImage:{
        'my-image':"url(/pexel.jpg)"
      },
      
    },
    
  },
  plugins: [],
}
