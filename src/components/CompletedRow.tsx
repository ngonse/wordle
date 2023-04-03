import Cell from './Cell';
import Row from './Row';
import { getKeyCompletedStatus } from '@/utils/get-key-status';
import { useGuessStore } from '@/store/guess-store';

type Props = {
  guess: string;
};

const CompletedRow: React.FC<Props> = ({ guess }) => {
  const { getTodayWordStored } = useGuessStore();

  const statuses = getKeyCompletedStatus(getTodayWordStored(), guess);

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
