import Cell from './Cell';
import Row from './Row';
import { getKeyCompletedStatus } from '@/utils/get-key-status';
import { useGuessStore } from '@/store/guess-store';

type Props = {
  guess: string;
  position?: number;
};

const CompletedRow: React.FC<Props> = ({ guess }) => {
  const { getTodayWordStored } = useGuessStore();

  const statuses = getKeyCompletedStatus(getTodayWordStored(), guess);

  return (
    <Row>
      {guess.split('').map((val, index) => {
        const classes = `cell-reveal
        ${statuses[index] === 'absent' && 'bg-slate-700 flip-absent'}
        ${statuses[index] === 'present' && 'bg-wordle-present flip-present'}
        ${statuses[index] === 'correct' && 'bg-wordle-correct flip-correct'}
        `;

        return (
          <Cell key={index} value={val} classes={classes} position={index} />
        );
      })}
    </Row>
  );
};

export default CompletedRow;
