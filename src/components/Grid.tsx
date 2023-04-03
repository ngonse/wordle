import CompletedRow from './CompletedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';
import { useGuessStore } from '@/store/guess-store';
import { MAX_CHALLENGES } from '@/utils';

const Grid = () => {
  const { guesses } = useGuessStore();

  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from({ length: MAX_CHALLENGES - guesses.length - 1 })
      : [];

  return (
    <div className="max-w-[450px] w-[450px]">
      {guesses.map((guess, index) => (
        <CompletedRow key={index} guess={guess} />
      ))}

      {guesses.length < MAX_CHALLENGES ? <CurrentRow /> : null}

      {empties.map((_, index) => (
        <EmptyRow key={index} />
      ))}
    </div>
  );
};

export default Grid;
