import cx from "clsx";

type CheckBoxProps = {
  id: string;
  label: string;
  className?: string;
  value?: string;
  checked?: boolean;
};

export default function Input({
  id,
  label,
  className,
  value = "",
  checked,
}: CheckBoxProps) {
  return (
    <div className={cx(className, "pb-4")}>
      <input
        id={id}
        className="p-1 border-black border-2"
        type="checkbox"
        value={value}
        checked={checked}
      />
      <label className="block" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
