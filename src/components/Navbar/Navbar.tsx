import React, { useState } from 'react';
import { Minus, X } from 'phosphor-react';

export const Navbar = () => {
  const [isMaximize, setMaximize] = useState(false);

  const handleToggle = () => {
    if (isMaximize) {
      setMaximize(false);
    } else {
      setMaximize(true);
    }
    window.Main.Maximize();
  };

  return (
    <div className="flex flex-row items-center justify-between h-10 draggable px-4 bg-dark-800">
      <div className="flex h-full items-center">
        <span className="text-sm font-semibold text-light-100">Streamdeck</span>
      </div>

      <div className="flex flex-row space-x-2 text-light-100">
        <button className="flex items-center justify-center h-full w-8 hover:bg-dark-800" onClick={window.Main.Minimize}>
          <Minus className="w-4 h-4 text-secundaria-400 cursor-pointer"/>
        </button>
        <button className="flex items-center justify-center h-full w-8 hover:bg-red-700" onClick={window.Main.Close}>
          <X className="w-4 h-4 text-secundaria-400 cursor-pointer"/>
        </button>
      </div>
    </div>
  );
}