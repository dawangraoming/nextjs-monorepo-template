import { FC, PropsWithChildren } from 'react';

export const Avatar: FC<PropsWithChildren<null>> = ({ children }) => {
  return (
    <div style={{ borderRadius: '99999px', width: 100, height: 100 }}>
      {children}
    </div>
  );
};
