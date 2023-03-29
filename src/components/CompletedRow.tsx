import Cell from './Cell';
import Row from './Row';

type Props = {
  guess: string;
};

const CompletedRow: React.FC<Props> = ({ guess }) => {
  return (
    <Row>
      {guess.split('').map((val, index) => (
        <Cell key={index} value={val} />
      ))}
    </Row>
  );
};

export default CompletedRow;
