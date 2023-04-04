type Props = {
  value?: string;
  classes?: string;
  position?: number;
};

const REVEAL_TIME_MS = 250;

const Cell: React.FC<Props> = ({
  value,
  classes = 'border-slate-400 border-2 bg-wordle-default',
  position,
}) => {
  let animationDelay = '0ms';

  if (position) {
    animationDelay = `${position * REVEAL_TIME_MS}ms`;
  }
  return (
    <div
      className={`relative w-full aspect-square flex justify-center items-center ${classes} `}
      style={{ animationDelay }}
    >
      <span
        className={`text-white text-4xl animate-bounce-in transform transition duration-500 ease-in-out  ${
          value?.length ? 'opacity-1' : 'opacity-0'
        }`}
        style={{ animationDelay }}
      >
        {value?.toUpperCase()}
      </span>
    </div>
  );
};

export default Cell;
