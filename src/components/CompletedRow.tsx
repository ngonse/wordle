import { getKeyCompletedStatus } from '@/utils/get-key-status';
import Cell from './Cell';
import Row from './Row';

type Props = {
  guess: string;
  toGuess: string;
};

const CompletedRow: React.FC<Props> = ({ guess, toGuess }) => {
  const statuses = getKeyCompletedStatus(toGuess, guess);

  console.log(statuses);

  return (
    <Row>
      {guess.split('').map((val, index) => {
        const classes = `${statuses[index] === 'absent' && 'bg-slate-700'}
        ${statuses[index] === 'present' && 'bg-wordle-present'}
        ${statuses[index] === 'correct' && 'bg-wordle-correct'}`;

        return <Cell key={index} value={val} classes={classes} />;
      })}
    </Row>
  );
};

export default CompletedRow;
