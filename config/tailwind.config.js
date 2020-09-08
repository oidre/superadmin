module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        dark: '#343A40',
        light: '#F5F5F5',
        graylight: '#E9ECEF',
        lighter: '#F8F9FA',
        darklight: '#3e454d',
        darker: '#262B2F'
      },
      width: {
        'side': 'calc(100% - 16rem)'
      }
    },
    maxWidth: {
      'sidebar': '16rem'
    },
  },
  variants: {
    overflow: ['responsive', 'hover', 'focus'],
    transitionDuration: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive', 'hover', 'focus'],
    visibility: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
