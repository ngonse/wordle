import words from '@/words.json';

export const getTodayWord = () => {
  const quantity = words.length;

  const index = Math.floor(Math.random() * quantity);
  const word = words[index];

  console.log({ word, index });
};
