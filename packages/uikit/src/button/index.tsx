import { FC, ReactNode } from 'react';

export const Button: FC<{ children: ReactNode }> = ({ children }) => {
  return <button>Button {children}</button>;
};
