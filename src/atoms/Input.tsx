import React from "react";
import "../sass/atoms/_input.scss";

interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string | any;
  name?: string;
  value?: string | any;
  maxLength?: number;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  label,
  type,
  placeholder,
  value,
  name,
  maxLength,
  required,
  onChange,
}: InputProps) => {
  return (
    <>
      <label className="ir" htmlFor={id ?? id}>
        {label ?? label}
      </label>
      <input
        className="common-input"
        autoComplete="off"
        id={id ?? id}
        type={type ?? type}
        placeholder={placeholder ?? placeholder}
        name={name ?? name}
        value={value ?? value}
        maxLength={maxLength ?? maxLength}
        required={required ?? required}
        onChange={onChange ?? onChange}
      />
    </>
  );
};

export default Input;
