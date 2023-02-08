import React from "react";
type InputProps = {
  ref?: React.RefObject<HTMLInputElement>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
};
const Input = ({
  ref,
  value,
  onChange,
  type,
  name,
  required,
  placeholder,
}: InputProps) => {
  return (
    <input
      ref={ref}
      value={value}
      name={name}
      required={required}
      autoComplete={type === "email" ? "email" : "off"}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-60 rounded-lg border-2
  border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-mountain-majesty"
    />
  );
};

export default Input;
