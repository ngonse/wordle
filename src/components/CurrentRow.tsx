import Cell from './Cell';
import Row from './Row';
import { WORD_LENGHT } from '@/utils';
import { useGuessStore } from '@/store/guess-store';

const CurrentRow = () => {
  const { currentGuess, incorrectWord } = useGuessStore();

  const empty = WORD_LENGHT - currentGuess.length;

  return (
    <Row classes={incorrectWord ? 'jiggle' : ''}>
      {currentGuess.split('').map((val, index) => (
        <Cell key={index} value={val} />
      ))}

      {Array.from({ length: empty }, (_, index) => (
        <Cell key={index} />
      ))}
    </Row>
  );
};

export default CurrentRow;
