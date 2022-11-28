module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/**/.{html,md,js}',
    '!./_site/**/*.{html,md,js}',
    './*.{html,md,js}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#494949',
        'grey': '#7C7C7C',
        'rich': '#101016',
        'teal-blue': '#005A74',
      },
      fontFamily: {
        featured: ['Poiret One', 'sans-serif']
      },
      height: {
        'tall-50': '50vh',
      },
      spacing: {
        '5p': '5%',
      }
    },
  },
  
  plugins: [],
}
