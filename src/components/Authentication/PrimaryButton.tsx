import React from "react";
import { PrimaryButtonProps } from "../../interfaces/props/PrimaryButtonProps";

export const PrimaryButton = (PrimaryButtonProps: PrimaryButtonProps) => {
  return (
    <button
      type={PrimaryButtonProps.type ? PrimaryButtonProps.type : "button"}
      className={`flex flex-row space-x-2 h-10 items-center cursor-pointer justify-center select-none text-light-400 hover:bg-opacity-70 bg-dark-1000 font-medium text-sm py-2 px-4 rounded-md ${
        PrimaryButtonProps.fluid ? "w-full" : ""
      }`}
      onClick={PrimaryButtonProps.onClick}
    >
      {PrimaryButtonProps.name}
    </button>
  );
};
