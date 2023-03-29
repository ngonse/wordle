type Props = {
  value?: string;
};

const Cell: React.FC<Props> = ({ value }) => (
  <div className="w-full  border-2 border-slate-400 aspect-square flex justify-center items-center">
    <span className="text-white text-4xl">{value?.toUpperCase()}</span>
  </div>
);

export default Cell;
