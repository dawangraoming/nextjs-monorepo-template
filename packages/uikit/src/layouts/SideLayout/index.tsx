import { FC, PropsWithChildren } from 'react';
import s from './style.module.css';

export const SideLayout: FC<PropsWithChildren<null>> = ({ children }) => {
  return (
    <div className={s.layout}>
      <header className={s.header} />
      <main className={s.main}>{children}</main>
      <footer className={s.footer}></footer>
    </div>
  );
};
