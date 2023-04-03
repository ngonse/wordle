import words from '@/words.json';

export const getTodayWord = () => {
  const quantity = words.length;

  const index = Math.floor(Math.random() * quantity);
  const word = words[index];

  return word;
};

export const getTodayWordStored = (word: string) => {
  return Buffer.from(word, 'base64').toString();
};
