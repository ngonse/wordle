import { WORD_LENGHT } from '@/utils';
import Cell from './Cell';
import Row from './Row';

const EmptyRow = () => {
  return (
    <Row>
      {Array.from({ length: WORD_LENGHT }, (_, index) => (
        <Cell key={index} />
      ))}
    </Row>
  );
};

export default EmptyRow;
