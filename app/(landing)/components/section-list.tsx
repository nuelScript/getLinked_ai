interface SectionListProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}
const SectionList = (props: SectionListProps) => {
  const { title, children, className } = props;
  return (
    <div className={`[&>*]:block ${className}`}>
      <p className="text-base font-semibold my-4 text-secondary3">{title}</p>
      {children}
    </div>
  );
};

export default SectionList;
