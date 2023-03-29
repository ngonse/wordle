import { MAX_CHALLENGES } from '@/utils';
import CompletedRow from './CompletedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

type Props = {
  guesses: string[];
  currentGuess: string;
};

const Boxes: React.FC<Props> = ({ guesses, currentGuess }) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from({ length: MAX_CHALLENGES - guesses.length - 1 })
      : [];

  return (
    <div className="max-w-[500px] w-[500px] ">
      {guesses.map((guess, index) => (
        <CompletedRow key={index} guess={guess} />
      ))}

      {guesses.length < MAX_CHALLENGES ? (
        <CurrentRow currentGuess={currentGuess} />
      ) : null}

      {empties.map((_, index) => (
        <EmptyRow key={index} />
      ))}
    </div>
  );
};

export default Boxes;
