import wordsNoAccent from '@/words-no-accent.json';

export const getWords = () => wordsNoAccent;

export const getTodayWord = () => {
  const quantity = wordsNoAccent.length;

  const index = Math.floor(Math.random() * quantity);
  const word = wordsNoAccent[index];

  return word;
};

export const getTodayWordStored = (word: string) => {
  return Buffer.from(word, 'base64').toString();
};
