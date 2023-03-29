import { WORD_LENGHT } from '@/utils';
import Cell from './Cell';
import Row from './Row';

type Props = {
  currentGuess: string;
};

const CurrentRow: React.FC<Props> = ({ currentGuess }) => {
  const empty = WORD_LENGHT - currentGuess.length;

  return (
    <Row>
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
