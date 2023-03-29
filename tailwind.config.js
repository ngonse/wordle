/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wordle-correct': '#5cb85c',
        'wordle-present': '#f0ad4e',
        'wordle-absent': '#d6d6d6',
      },
    },
  },
  plugins: [],
};
