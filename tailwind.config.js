/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'grey-900':'hsl(0, 0%, 8%)',
        'grey-800':'hsl(0, 0%, 12%)',
        'grey-700':'hsl(0, 0%, 20%)',
        'green':'hsl(75, 94%, 57%)',
      },
      fontFamily: {
        'inter':'Inter',
      }
    },
  },
  plugins: [],
}