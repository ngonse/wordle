type Status = 'nope' | 'correct' | 'yep';

export const getKeyStatus = (toGuess: string, guesses: string[]) => {
  const splitToGuess = toGuess.split('');

  const letters: { [key: string]: Status } = {};

  guesses.forEach((word) => {
    word.split('').forEach((char, index) => {
      if (!splitToGuess.includes(char)) {
        return (letters[char] = 'nope');
      }

      if (char === splitToGuess[index]) {
        return (letters[char] = 'correct');
      }

      if (letters[char] !== 'correct') {
        return (letters[char] = 'yep');
      }
    });
  });

  return letters;
};
