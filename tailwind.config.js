/** @type { import('tailwindcss').Config } */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wordle-correct': 'var(--correct)',
        'wordle-present': 'var(--present)',
        'wordle-absent': 'var(--absent)',
      },
    },
  },
  plugins: [],
};
