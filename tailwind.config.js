module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'link': '#5ee329',
      },
      width: {
        '100': '6.25rem',
      },
      height: {
        '100': '6.25rem',
      },
      fontFamily: {
        'BebasNeue-Regular': ['BebasNeue'],
      },
      fontSize: {
        'defaultSizeTitle': '40px',
        'mdSizeTitle': '60px',
        'lgSizeTitle': '70px',
        'mdSizeAddress': '0.9rem',
        'lgSizeAddress': '0.9rem',
      },
      animation: {
        'moveUp': 'move',
      }
    },
  },
  plugins: [],
}
