type Props = {
  children: React.ReactNode;
  classes?: string;
};

const Row: React.FC<Props> = ({ children, classes }) => (
  <div className={`grid grid-cols-5 gap-[5px] mb-[5px] ${classes}`}>
    {children}
  </div>
);

export default Row;
