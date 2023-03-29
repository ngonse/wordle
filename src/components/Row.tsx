type Props = {
  children: React.ReactNode;
};

const Row: React.FC<Props> = ({ children }) => (
  <div className="grid grid-cols-5 gap-[5px] mb-[5px]">{children}</div>
);

export default Row;
