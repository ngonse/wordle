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
    <div className="grid grid-rows-3 mb-10">
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

            console.log(status);

            const clasess = `
            ${!status && 'bg-gray-100 border-gray-300 hover:bg-gray-200'}
            ${
              status === 'nope' &&
              'bg-gray-600 border-gray-900 hover:bg-gray-500'
            }
            ${
              status === 'yep' &&
              'bg-yellow-300 border-yellow-400 hover:bg-yellow-100'
            }
            ${
              status === 'correct' &&
              'bg-green-600 border-green-600 hover:bg-green-500'
            }`;

            return (
              <button
                key={label}
                onClick={() => handleButtonClick(label)}
                className={`${
                  label.length > 1 ? '' : 'aspect-square'
                } ${clasess} p-3 text-xl text-center border rounded-md focus:outline-none h-full`}
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
