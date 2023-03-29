import { getKeyStatus } from '@/utils/get-key-status';
import { useEffect } from 'react';

type Props = {
  toGuess: string;
  guesses: string[];
  onEnter: () => void;
  onKeyPress: (char: string) => void;
  onDelete: () => void;
};

const letters = 'qwertyuiop_asdfghjklñ_<zxcvbnm>';

const Keyboard: React.FC<Props> = ({
  toGuess,
  guesses,
  onKeyPress,
  onEnter,
  onDelete,
}) => {
  const keyStatus = getKeyStatus(toGuess, guesses);

  const handleButtonClick = (value: string) => {
    if (value === 'DEL') {
      onDelete();
      return;
    }

    if (value === 'ENTER') {
      onEnter();
      return;
    }

    onKeyPress(value);
  };

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter();
        return;
      }

      if (e.code === 'Backspace') {
        onDelete();
        return;
      }

      const key = e.key;

      if (/^[a-zA-Z]$/.test(key)) {
        onKeyPress(key);
      }
    };

    window.addEventListener('keyup', onKeyPressed);

    return () => {
      window.removeEventListener('keyup', onKeyPressed);
    };
  });

  return (
    <div className="grid grid-rows-3 mb-3">
      {letters.split('_').map((rowLetters) => (
        <div key={rowLetters} className="flex justify-center gap-2 mb-2">
          {rowLetters.split('').map((letter) => {
            let label = letter;

            if (letter === '<') {
              label = 'ENTER';
            } else if (letter === '>') {
              label = 'DEL';
            }

            const status = keyStatus[letter];

            const clasess = `
            ${!status && 'bg-gray-100 hover:bg-gray-200'}
            ${status === 'absent' && 'bg-wordle-absent hover:bg-gray-500'}
            ${status === 'present' && 'bg-wordle-present hover:bg-yellow-100'}
            ${status === 'correct' && 'bg-wordle-correct hover:bg-green-500'}`;

            return (
              <button
                key={label}
                onClick={() => handleButtonClick(label)}
                className={`${
                  label.length > 1 ? '' : 'aspect-square'
                } ${clasess} px-3 text-xl text-center rounded-md focus:outline-none`}
              >
                <kbd>{label.toUpperCase()}</kbd>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
