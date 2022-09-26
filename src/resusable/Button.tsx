import cx from "clsx";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit";
  variant?: "primary" | "secondary";
};

const variantMap = {
  primary: "bg-white text-black",
  secondary: "bg-gray-500 text-white",
};

export default function Button({
  children,
  type,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        variantMap[variant],
        className,
        "border-black border-2 text-black hover:bg-black hover:text-white font-bold rounded p-4"
      )}
    >
      {children}
    </button>
  );
}
