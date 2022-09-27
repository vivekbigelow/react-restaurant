import cx from "clsx";
import React from "react";
import Error from './Error';

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "number";
  className?: string;
  value?: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export default function Input({
  id,
  label,
  type = "text",
  className,
  value = "",
  error,
  onChange
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
        value={value}
        onChange={onChange}
      />
      {error && <Error error={error}/>}
    </div>
  );
}
