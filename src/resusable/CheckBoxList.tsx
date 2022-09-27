
type CheckBoxListProps = {
  className?: string;
  children: React.ReactNode;
};

export default function CheckBoxList({
  className="",
  children,
}: CheckBoxListProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
