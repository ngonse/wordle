/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wordle-correct': '#5cb85c',
        'wordle-present': '#f0ad4e',
        'wordle-absent': '#b0b0b0',
      },
    },
  },
  plugins: [],
};
