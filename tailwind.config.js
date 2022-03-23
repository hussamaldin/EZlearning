module.exports = {
  theme: {
    extend: {
      width: {
       '900': '900px',
      },
      height: {
        '1000': '1000px',
       }
   }
 },
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 4s ease-out infinite both',
       },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(1px)' },
          '5%': { transform: 'translate(-20px)' },
          '10%': { transform: 'translate(-40px)' },
          '15%': { transform: 'translate(-60px)' },
          '20%': { transform: 'translate(-80px)' },
          '25%': { transform: 'translate(-100px)' },
          '30%': { transform: 'translate(-120px)' },
          '35%': { transform: 'translate(-140px)' },
          '40%': { transform: 'translate(-160px)' },
          '45%': { transform: 'translate(-180px)' },
          '50%': { transform: 'translate(-200px)' },
          '55%': { transform: 'translate(-220px)' },
          '60%': { transform: 'translate(-240px)' },
          '65%': { transform: 'translate(-260px)' },
          '70%': { transform: 'translate(-280px)' },
          '75%': { transform: 'translate(-300px)' },
          '80%': { transform: 'translate(-320px)' },
          '85%': { transform: 'translate(-340px)' },
          '90%': { transform: 'translate(-360px)' },
          '95%': { transform: 'translate(-380px)' },
          '100%': { transform: 'translate(-400px)' },
        }
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
