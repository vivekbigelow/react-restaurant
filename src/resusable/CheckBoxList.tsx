import Error from './Error';

type CheckBoxListProps = {
  className?: string;
  children: React.ReactNode;
  label: string;
  error?: string;
};

export default function CheckBoxList({
  className = "",
  children,
  label,
  error,
}: CheckBoxListProps) {
  return (
    <fieldset className={className}>
      <legend className="font-bold">{label}</legend>
      {error && <Error error={error} />}
      {children}
    </fieldset>
  );
}
