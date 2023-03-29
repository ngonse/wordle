export const getKeyStatus = (toGuess: string, guesses: string[]) => {
  const splitToGuess = toGuess.split('');

  const letters: { [key: string]: Status } = {};

  guesses.forEach((word) => {
    word.split('').forEach((char, index) => {
      if (!splitToGuess.includes(char)) {
        return (letters[char] = 'absent');
      }

      if (char === splitToGuess[index]) {
        return (letters[char] = 'correct');
      }

      if (letters[char] !== 'correct') {
        return (letters[char] = 'present');
      }
    });
  });

  return letters;
};

export const getKeyCompletedStatus = (toGuess: string, guess: string) => {
  const splitToGuess = toGuess.split('');
  const splitGuess = guess.split('');

  const solutionCharTaken = Array.from({ length: guess.length }).fill(false);

  const statuses: Status[] = Array.from({ length: guess.length });

  splitGuess.forEach((char, index) => {
    if (char === splitToGuess[index]) {
      statuses[index] = 'correct';
      solutionCharTaken[index] = true;
      return;
    }
  });

  splitGuess.forEach((letter, index) => {
    if (statuses[index]) {
      return;
    }

    if (!splitToGuess.includes(letter)) {
      statuses[index] = 'absent';
      return;
    }

    const indexPresent = splitToGuess.findIndex(
      (char, ind) => char === letter && !solutionCharTaken[ind],
    );

    if (indexPresent > -1) {
      statuses[index] = 'present';
      solutionCharTaken[indexPresent] = true;
      return;
    }

    statuses[index] = 'absent';
  });

  return statuses;
};
