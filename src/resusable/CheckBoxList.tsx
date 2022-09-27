type CheckBoxListProps = {
  className?: string;
  children: React.ReactNode;
  label: string;
};

export default function CheckBoxList({
  className = "",
  children,
  label,
}: CheckBoxListProps) {
  return (
    <fieldset className={className}>
      <legend className="font-bold">{label}</legend>
      {children}
    </fieldset>
  );
}
