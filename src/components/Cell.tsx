type Props = {
  value?: string;
  classes?: string;
};

const Cell: React.FC<Props> = ({
  value,
  classes = 'border-slate-400 border-2',
}) => (
  <div
    className={`relative w-full aspect-square flex justify-center items-center ${classes}`}
  >
    <span
      className={`text-white text-4xl animate-bounce-in transform transition duration-500 ease-in-out  ${
        value?.length ? 'opacity-1' : 'opacity-0'
      }`}
    >
      {value?.toUpperCase()}
    </span>
  </div>
);

export default Cell;
