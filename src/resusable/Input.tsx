import cx from "clsx";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "number";
  className?: string;
};

export default function Input({
  id,
  label,
  type = "text",
  className,
}: InputProps) {
  return (
    <div className={cx(className, "pb-4")}>
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="p-1 border-black border-2"
        type={type}
      />
    </div>
  );
}
