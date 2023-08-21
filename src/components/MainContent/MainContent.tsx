import React from "react";
import { MainContentProps } from "../../interfaces/props/MainContentProps";
import { Navbar } from "../Navbar/Navbar";

export const MainContent = (MainContentProps: MainContentProps) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full h-full overflow-y-auto scroll-normalize">{MainContentProps.children}</div>
    </div>
  );
};
