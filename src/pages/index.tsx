import Grid from '@/components/Grid';
import Keyboard from '@/components/Keyboard';
import Shell from '@/shells/Shell';
import { MAX_CHALLENGES, WORD_LENGHT } from '@/utils';
import { useState } from 'react';

const toGuess = 'casas';

export default function Home() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');

  const onEnter = () => {
    if (currentGuess.length !== WORD_LENGHT) {
      console.log('todavia no mi rey');
      return;
    }

    if (guesses.length >= MAX_CHALLENGES) {
      return;
    }

    setGuesses((prev) => [...prev, currentGuess]);
    setCurrentGuess('');
  };

  const onKeyPress = (char: string) => {
    if (currentGuess.length === WORD_LENGHT) {
      return;
    }

    setCurrentGuess((prev) => `${prev}${char}`);
  };

  const onDelete = () => {
    if (!currentGuess.length) {
      return;
    }

    setCurrentGuess(currentGuess.split('').slice(0, -1).join(''));
  };

  return (
    <Shell>
      <header className="flex justify-center items-center text-white p-2  h-[var(--header-height)] ">
        <h1 className="text-2xl">WORDLE</h1>
      </header>

      <div className="grid grid-rows-4 grid-flow-row h-[calc(100%-var(--header-height))] justify-center">
        <div className="row-span-3 flex justify-center">
          <Grid
            guesses={guesses}
            currentGuess={currentGuess}
            toGuess={toGuess}
          />
        </div>
        <Keyboard
          toGuess={toGuess}
          guesses={guesses}
          onEnter={onEnter}
          onKeyPress={onKeyPress}
          onDelete={onDelete}
        />
      </div>
    </Shell>
  );
}
