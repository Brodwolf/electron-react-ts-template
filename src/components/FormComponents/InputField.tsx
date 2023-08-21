import React from "react";
import { InputProps } from "../../interfaces/props/InputProps";

export const InputField: React.FC<InputProps> = ({ register, ...InputProps }) => {
  return (
    <div className="flex flex-col space-y-2.5 w-full">
      {InputProps.label && <span className="text-light-400 font-medium text-sm">{InputProps.label}</span>}
      <input
        disabled={InputProps.disabled ?? false}
        spellCheck="false"
        autoComplete="off"
        id={InputProps.id}
        type={InputProps.type}
        placeholder={InputProps.name}
        className="w-full text-sm text-light-400 bg-dark-1000 shadow-sm shadow-dark-1000 text-whit rounded-md h-10 px-3 focus:outline-none"
        {...register(InputProps.id)}
      />
    </div>
  );
};
