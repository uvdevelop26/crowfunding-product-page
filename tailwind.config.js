/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/css/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        moderateCyan: 'hsl(176, 50%, 47%)',
        darkCyan: 'hsl(176, 72%, 28%)',
        darkGray: 'hsl(0, 0%, 48%)',
        blackOp50: 'rgba(0, 0, 0, .5)',
        path: '#B1B1B1',
        circle: '#2F2F2F'
      },
      backgroundImage: {
        'hero-mobile': "url('/uvdevelop26.github.io/crowfunding-product-page/src/images/image-hero-mobile.jpg')",
        'hero-desktop': "url('/uvdevelop26.github.io/crowfunding-product-page/src/images/image-hero-desktop.jpg')"
      },
      backgroundSize: {
        'fit': '100% 100%',
      },
      fontSize: {
        'ftitle': '1.28rem',
        '2mxl': '1.73rem'
      },

      width: {
        '41': '10.1rem',
        '53': '13.2rem',
        'fitxl': '2rem',
        'fitxl2': '35rem'
      },

      letterSpacing: {
        paragraph: '.001em',
        paragraphlg: '.009em'
      },
      spacing: {
        '12-5': '3rem',
        '21': '5.4rem',
        '29': '7.5rem',
        '47': '11.5rem',
        'fitXl': '45.5rem'
      },
      zIndex: {
        '-1': '-1',
        '1': '1'
      }
    },
  },
  plugins: [],
}

