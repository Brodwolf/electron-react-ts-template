import React, { ReactNode } from 'react';

interface AuthenticationContainerProps {
  children: ReactNode;
}

export const AuthenticationContainer: React.FC<AuthenticationContainerProps> = ({ children }) => {
  return (
    <div className="flex w-full h-full items-center justify-center rounded-xl">
      <div className="flex flex-col w-96 h-72 p-5">
        <img className="h-20" src="/assets/icons/04.svg"/>
        {children}
      </div>
    </div>
  );
};