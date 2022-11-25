module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/**/.{html,md}',
    '!./_site/**/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#7C7C7C',
        'rich': '#101016',
      },
      fontFamily: {
        featured: ['Poiret One', 'sans-serif']
      },
      height: {
        'tall-50': '50vh',
      }
    },
  },
  
  plugins: [],
}
