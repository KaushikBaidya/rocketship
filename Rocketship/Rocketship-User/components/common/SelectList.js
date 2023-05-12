import React from "react";
import ErrorMessage from "../admin/ErrorMessage";
// import ErrorMessage from "./Error/ErrorMessage";

export const SelectFromOptions = ({
  register,
  options,
  label,
  name,
  errorMessage,
  ...rest
}) => {
  return (
    <div className="form-row w-full">
      <label>{label}</label>
      <select className="form-control bg-white" {...register(name)} {...rest}>
        <option value="">-- Select --</option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <ErrorMessage message={errorMessage} />
    </div>
  );
};
